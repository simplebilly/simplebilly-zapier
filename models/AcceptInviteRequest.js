const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                label: `GDPR consent — rejected unless true. - [${labelPrefix}privacy_accepted]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}token`,
                label: `[${labelPrefix}token]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'privacy_accepted': bundle.inputData?.[`${keyPrefix}privacy_accepted`],
            'token': bundle.inputData?.[`${keyPrefix}token`],
        }
    },
}
