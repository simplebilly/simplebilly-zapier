const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}maxSellable`,
                label: `Optional ceiling for the deliverable quantity. - [${labelPrefix}maxSellable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `None = applies to all products. References the product entity. - [${labelPrefix}productId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reserveStock`,
                label: `Buffer of stock that must not be sold. - [${labelPrefix}reserveStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `None = applies to all warehouses. References the warehouse entity. - [${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'maxSellable': bundle.inputData?.[`${keyPrefix}maxSellable`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'reserveStock': bundle.inputData?.[`${keyPrefix}reserveStock`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
