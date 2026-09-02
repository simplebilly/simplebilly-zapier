const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}account`,
                label: `[${labelPrefix}account]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}account_name`,
                label: `[${labelPrefix}account_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account': bundle.inputData?.[`${keyPrefix}account`],
            'account_name': bundle.inputData?.[`${keyPrefix}account_name`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
        }
    },
}
