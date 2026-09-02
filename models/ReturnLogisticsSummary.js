const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const ReturnWarehouseSummary = require('../models/ReturnWarehouseSummary');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}byStatus`, isInput),
            {
                key: `${keyPrefix}byWarehouse`,
                label: `[${labelPrefix}byWarehouse]`,
                children: ReturnWarehouseSummary.fields(`${keyPrefix}byWarehouse${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}itemsRestocked`,
                label: `Sum of `restock: true` line-item quantities. - [${labelPrefix}itemsRestocked]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}itemsScrapped`,
                label: `Sum of `restock: false` line-item quantities (scrapped/disposed). - [${labelPrefix}itemsScrapped]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalItems`,
                label: `Sum of all line-item quantities across returns. - [${labelPrefix}totalItems]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalReturns`,
                label: `Total number of return orders (excluding soft-deleted). - [${labelPrefix}totalReturns]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'byStatus': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}byStatus`)),
            'byWarehouse': utils.childMapping(bundle.inputData?.[`${keyPrefix}byWarehouse`], `${keyPrefix}byWarehouse`, ReturnWarehouseSummary),
            'itemsRestocked': bundle.inputData?.[`${keyPrefix}itemsRestocked`],
            'itemsScrapped': bundle.inputData?.[`${keyPrefix}itemsScrapped`],
            'totalItems': bundle.inputData?.[`${keyPrefix}totalItems`],
            'totalReturns': bundle.inputData?.[`${keyPrefix}totalReturns`],
        }
    },
}
