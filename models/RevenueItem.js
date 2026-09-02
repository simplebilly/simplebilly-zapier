const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `[${labelPrefix}category]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}percentage`,
                label: `[${labelPrefix}percentage]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'percentage': bundle.inputData?.[`${keyPrefix}percentage`],
        }
    },
}
