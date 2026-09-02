const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_read`,
                label: `[${labelPrefix}is_read]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sent_via_email`,
                label: `[${labelPrefix}sent_via_email]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tenant_id`,
                label: `[${labelPrefix}tenant_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}user_id`,
                label: `[${labelPrefix}user_id]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'is_read': bundle.inputData?.[`${keyPrefix}is_read`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'sent_via_email': bundle.inputData?.[`${keyPrefix}sent_via_email`],
            'tenant_id': bundle.inputData?.[`${keyPrefix}tenant_id`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'user_id': bundle.inputData?.[`${keyPrefix}user_id`],
        }
    },
}
