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
                key: `${keyPrefix}konto`,
                label: `[${labelPrefix}konto]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'konto': bundle.inputData?.[`${keyPrefix}konto`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
