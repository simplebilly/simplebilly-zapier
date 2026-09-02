const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currentStock`,
                label: `Current stock in the target warehouse. - [${labelPrefix}currentStock]`,
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
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceAvailable`,
                label: `Surplus available in the source warehouse (above its target). - [${labelPrefix}sourceAvailable]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}sourceWarehouseId`,
                label: `[${labelPrefix}sourceWarehouseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}suggestedQuantity`,
                label: `[${labelPrefix}suggestedQuantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}targetWarehouseId`,
                label: `[${labelPrefix}targetWarehouseId]`,
                required: true,
                type: 'string',
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
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'sourceAvailable': bundle.inputData?.[`${keyPrefix}sourceAvailable`],
            'sourceWarehouseId': bundle.inputData?.[`${keyPrefix}sourceWarehouseId`],
            'suggestedQuantity': bundle.inputData?.[`${keyPrefix}suggestedQuantity`],
            'targetWarehouseId': bundle.inputData?.[`${keyPrefix}targetWarehouseId`],
        }
    },
}
