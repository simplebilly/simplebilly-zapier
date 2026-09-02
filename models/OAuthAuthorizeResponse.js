const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}authorization_url`,
                label: `[${labelPrefix}authorization_url]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'authorization_url': bundle.inputData?.[`${keyPrefix}authorization_url`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
        }
    },
}
