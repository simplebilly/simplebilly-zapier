const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isListPrice`,
                label: `True when no tier matched and the product list price was used. - [${labelPrefix}isListPrice]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}priceTierId`,
                label: `Applied tier, if any matched. - [${labelPrefix}priceTierId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}unitPrice`,
                label: `[${labelPrefix}unitPrice]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isListPrice': bundle.inputData?.[`${keyPrefix}isListPrice`],
            'priceTierId': bundle.inputData?.[`${keyPrefix}priceTierId`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'unitPrice': bundle.inputData?.[`${keyPrefix}unitPrice`],
        }
    },
}
