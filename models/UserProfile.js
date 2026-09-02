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
                key: `${keyPrefix}first_name`,
                label: `[${labelPrefix}first_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}full_name`,
                label: `[${labelPrefix}full_name]`,
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
                key: `${keyPrefix}last_name`,
                label: `[${labelPrefix}last_name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'email_verified': bundle.inputData?.[`${keyPrefix}email_verified`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'full_name': bundle.inputData?.[`${keyPrefix}full_name`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
        }
    },
}
