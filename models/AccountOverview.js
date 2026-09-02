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
                key: `${keyPrefix}balance`,
                label: `[${labelPrefix}balance]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}credit_total`,
                label: `[${labelPrefix}credit_total]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}debit_total`,
                label: `[${labelPrefix}debit_total]`,
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
            'balance': bundle.inputData?.[`${keyPrefix}balance`],
            'credit_total': bundle.inputData?.[`${keyPrefix}credit_total`],
            'debit_total': bundle.inputData?.[`${keyPrefix}debit_total`],
        }
    },
}
