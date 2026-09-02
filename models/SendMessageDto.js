const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_internal`,
                label: `[${labelPrefix}is_internal]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'is_internal': bundle.inputData?.[`${keyPrefix}is_internal`],
        }
    },
}
