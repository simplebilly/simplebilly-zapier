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
                key: `${keyPrefix}confirmationHint`,
                label: `Carries the status-check token (email is out of scope for now). - [${labelPrefix}confirmationHint]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'appointmentId': bundle.inputData?.[`${keyPrefix}appointmentId`],
            'confirmationHint': bundle.inputData?.[`${keyPrefix}confirmationHint`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
