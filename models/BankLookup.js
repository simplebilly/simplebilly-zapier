const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bank_name`,
                label: `[${labelPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bic`,
                label: `[${labelPrefix}bic]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iban`,
                label: `[${labelPrefix}iban]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}nextgenpsd2_url`,
                label: `[${labelPrefix}nextgenpsd2_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}psd2_supported`,
                label: `[${labelPrefix}psd2_supported]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bic': bundle.inputData?.[`${keyPrefix}bic`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'nextgenpsd2_url': bundle.inputData?.[`${keyPrefix}nextgenpsd2_url`],
            'psd2_supported': bundle.inputData?.[`${keyPrefix}psd2_supported`],
        }
    },
}
