const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}backup_codes`,
                label: `[${labelPrefix}backup_codes]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}qr_code_url`,
                label: `[${labelPrefix}qr_code_url]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}secret`,
                label: `[${labelPrefix}secret]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'backup_codes': bundle.inputData?.[`${keyPrefix}backup_codes`],
            'qr_code_url': bundle.inputData?.[`${keyPrefix}qr_code_url`],
            'secret': bundle.inputData?.[`${keyPrefix}secret`],
        }
    },
}
