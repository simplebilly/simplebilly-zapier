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
                key: `${keyPrefix}password`,
                label: `[${labelPrefix}password]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}totp_code`,
                label: `[${labelPrefix}totp_code]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'totp_code': bundle.inputData?.[`${keyPrefix}totp_code`],
        }
    },
}
