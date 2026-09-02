const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}callback_url`,
                label: `[${labelPrefix}callback_url]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}event_type`,
                label: `[${labelPrefix}event_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}subscription_id`,
                label: `[${labelPrefix}subscription_id]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'callback_url': bundle.inputData?.[`${keyPrefix}callback_url`],
            'event_type': bundle.inputData?.[`${keyPrefix}event_type`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'subscription_id': bundle.inputData?.[`${keyPrefix}subscription_id`],
        }
    },
}
