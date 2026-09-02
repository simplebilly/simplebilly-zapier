const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}product_id`,
                label: `[${labelPrefix}product_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stock_quantity`,
                label: `[${labelPrefix}stock_quantity]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'product_id': bundle.inputData?.[`${keyPrefix}product_id`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'stock_quantity': bundle.inputData?.[`${keyPrefix}stock_quantity`],
        }
    },
}
