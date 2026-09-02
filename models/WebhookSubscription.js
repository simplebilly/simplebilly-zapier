const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}eventType`,
                label: `Event type to react to (e.g. \"order.created\"); \"*\" = all events. - [${labelPrefix}eventType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Human label (e.g. \"Warehouse app\"). - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}secret`,
                label: `Shared secret for HMAC-SHA256 signature, sent as X-Signature. - [${labelPrefix}secret]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'eventType': bundle.inputData?.[`${keyPrefix}eventType`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'secret': bundle.inputData?.[`${keyPrefix}secret`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
        }
    },
}
