const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}apiKey`,
                label: `[${labelPrefix}apiKey]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}provider`,
                label: `[${labelPrefix}provider]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}years`,
                label: `[${labelPrefix}years]`,
                required: true,
                list: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'apiKey': bundle.inputData?.[`${keyPrefix}apiKey`],
            'provider': bundle.inputData?.[`${keyPrefix}provider`],
            'years': bundle.inputData?.[`${keyPrefix}years`],
        }
    },
}
