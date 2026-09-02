const utils = require('../utils/utils');
const SalesVolumeItem = require('../models/SalesVolumeItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}grand_total`,
                label: `[${labelPrefix}grand_total]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: SalesVolumeItem.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_count`,
                label: `[${labelPrefix}total_count]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'grand_total': bundle.inputData?.[`${keyPrefix}grand_total`],
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, SalesVolumeItem),
            'total_count': bundle.inputData?.[`${keyPrefix}total_count`],
        }
    },
}
