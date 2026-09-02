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
                key: `${keyPrefix}email_verified`,
                label: `[${labelPrefix}email_verified]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}joined_at`,
                label: `[${labelPrefix}joined_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_login`,
                label: `[${labelPrefix}last_login]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}permissions`,
                label: `[${labelPrefix}permissions]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
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
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'email_verified': bundle.inputData?.[`${keyPrefix}email_verified`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'joined_at': bundle.inputData?.[`${keyPrefix}joined_at`],
            'last_login': bundle.inputData?.[`${keyPrefix}last_login`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'permissions': bundle.inputData?.[`${keyPrefix}permissions`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'user_id': bundle.inputData?.[`${keyPrefix}user_id`],
        }
    },
}
