const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productIds`,
                label: `[${labelPrefix}productIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'productIds': bundle.inputData?.[`${keyPrefix}productIds`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
