const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requestedDate`,
                label: `[${labelPrefix}requestedDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierName`,
                label: `[${labelPrefix}supplierName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}timeSlot`,
                label: `[${labelPrefix}timeSlot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseCode`,
                label: `Warehouse `code` — the supplier does not know the warehouse uuid. - [${labelPrefix}warehouseCode]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'requestedDate': bundle.inputData?.[`${keyPrefix}requestedDate`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'timeSlot': bundle.inputData?.[`${keyPrefix}timeSlot`],
            'warehouseCode': bundle.inputData?.[`${keyPrefix}warehouseCode`],
        }
    },
}
