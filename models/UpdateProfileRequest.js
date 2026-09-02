const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}avatar_url`,
                label: `[${labelPrefix}avatar_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}first_name`,
                label: `[${labelPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `[${labelPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'avatar_url': bundle.inputData?.[`${keyPrefix}avatar_url`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
