const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}customerGroupId`,
                label: `None = tier applies to all customers; otherwise a customer group id. - [${labelPrefix}customerGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}minQuantity`,
                label: `Quantity from which this tier applies (inclusive). - [${labelPrefix}minQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}productId`,
                label: `References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitPrice`,
                label: `Net unit price once `min_quantity` is reached. - [${labelPrefix}unitPrice]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customerGroupId': bundle.inputData?.[`${keyPrefix}customerGroupId`],
            'minQuantity': bundle.inputData?.[`${keyPrefix}minQuantity`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'unitPrice': bundle.inputData?.[`${keyPrefix}unitPrice`],
        }
    },
}
