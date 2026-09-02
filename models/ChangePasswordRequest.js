const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}current_password`,
                label: `[${labelPrefix}current_password]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}new_password`,
                label: `[${labelPrefix}new_password]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'current_password': bundle.inputData?.[`${keyPrefix}current_password`],
            'new_password': bundle.inputData?.[`${keyPrefix}new_password`],
        }
    },
}
