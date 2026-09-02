const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}company_name`,
                label: `[${labelPrefix}company_name]`,
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
                key: `${keyPrefix}first_name`,
                label: `[${labelPrefix}first_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `[${labelPrefix}last_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}password`,
                label: `[${labelPrefix}password]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}privacy_accepted`,
                label: `GDPR consent — registration is rejected unless true. - [${labelPrefix}privacy_accepted]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'company_name': bundle.inputData?.[`${keyPrefix}company_name`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'privacy_accepted': bundle.inputData?.[`${keyPrefix}privacy_accepted`],
        }
    },
}
