const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}appointmentId`,
                label: `[${labelPrefix}appointmentId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}requestedDate`,
                label: `[${labelPrefix}requestedDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}timeSlot`,
                label: `[${labelPrefix}timeSlot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseName`,
                label: `[${labelPrefix}warehouseName]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'appointmentId': bundle.inputData?.[`${keyPrefix}appointmentId`],
            'requestedDate': bundle.inputData?.[`${keyPrefix}requestedDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'timeSlot': bundle.inputData?.[`${keyPrefix}timeSlot`],
            'warehouseName': bundle.inputData?.[`${keyPrefix}warehouseName`],
        }
    },
}
