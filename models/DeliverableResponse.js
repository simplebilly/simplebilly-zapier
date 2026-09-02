const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}availableStock`,
                label: `[${labelPrefix}availableStock]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}deliverableQuantity`,
                label: `[${labelPrefix}deliverableQuantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}maxSellable`,
                label: `[${labelPrefix}maxSellable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reservedStock`,
                label: `[${labelPrefix}reservedStock]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'availableStock': bundle.inputData?.[`${keyPrefix}availableStock`],
            'deliverableQuantity': bundle.inputData?.[`${keyPrefix}deliverableQuantity`],
            'maxSellable': bundle.inputData?.[`${keyPrefix}maxSellable`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'reservedStock': bundle.inputData?.[`${keyPrefix}reservedStock`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
