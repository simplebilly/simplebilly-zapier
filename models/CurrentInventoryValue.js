const utils = require('../utils/utils');
const InventoryValuePoint = require('../models/InventoryValuePoint');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}history`,
                label: `[${labelPrefix}history]`,
                children: InventoryValuePoint.fields(`${keyPrefix}history${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}product_count`,
                label: `[${labelPrefix}product_count]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}total_purchase_value`,
                label: `[${labelPrefix}total_purchase_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_sales_value`,
                label: `[${labelPrefix}total_sales_value]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'history': utils.childMapping(bundle.inputData?.[`${keyPrefix}history`], `${keyPrefix}history`, InventoryValuePoint),
            'product_count': bundle.inputData?.[`${keyPrefix}product_count`],
            'total_purchase_value': bundle.inputData?.[`${keyPrefix}total_purchase_value`],
            'total_sales_value': bundle.inputData?.[`${keyPrefix}total_sales_value`],
        }
    },
}
