const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}new_password`,
                label: `[${labelPrefix}new_password]`,
                required: true,
                type: 'string',
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
            'new_password': bundle.inputData?.[`${keyPrefix}new_password`],
            'token': bundle.inputData?.[`${keyPrefix}token`],
        }
    },
}
