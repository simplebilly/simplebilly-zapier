const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}content_type`,
                label: `[${labelPrefix}content_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}qr_code_base64`,
                label: `[${labelPrefix}qr_code_base64]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'content_type': bundle.inputData?.[`${keyPrefix}content_type`],
            'qr_code_base64': bundle.inputData?.[`${keyPrefix}qr_code_base64`],
        }
    },
}
