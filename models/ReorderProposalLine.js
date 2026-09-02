const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currentStock`,
                label: `[${labelPrefix}currentStock]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}maxStock`,
                label: `[${labelPrefix}maxStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}minStock`,
                label: `[${labelPrefix}minStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}productName`,
                label: `[${labelPrefix}productName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reorderQuantity`,
                label: `[${labelPrefix}reorderQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}suggestedQuantity`,
                label: `[${labelPrefix}suggestedQuantity]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currentStock': bundle.inputData?.[`${keyPrefix}currentStock`],
            'maxStock': bundle.inputData?.[`${keyPrefix}maxStock`],
            'minStock': bundle.inputData?.[`${keyPrefix}minStock`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'productName': bundle.inputData?.[`${keyPrefix}productName`],
            'reorderQuantity': bundle.inputData?.[`${keyPrefix}reorderQuantity`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'suggestedQuantity': bundle.inputData?.[`${keyPrefix}suggestedQuantity`],
        }
    },
}
