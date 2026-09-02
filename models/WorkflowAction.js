const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}action_type`,
                label: `[${labelPrefix}action_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'action_type': bundle.inputData?.[`${keyPrefix}action_type`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
        }
    },
}
