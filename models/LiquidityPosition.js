const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}accounts_payable`,
                label: `[${labelPrefix}accounts_payable]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}accounts_receivable`,
                label: `[${labelPrefix}accounts_receivable]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}cash_and_equivalents`,
                label: `[${labelPrefix}cash_and_equivalents]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}current_ratio`,
                label: `[${labelPrefix}current_ratio]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}quick_ratio`,
                label: `[${labelPrefix}quick_ratio]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}working_capital`,
                label: `[${labelPrefix}working_capital]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'accounts_payable': bundle.inputData?.[`${keyPrefix}accounts_payable`],
            'accounts_receivable': bundle.inputData?.[`${keyPrefix}accounts_receivable`],
            'cash_and_equivalents': bundle.inputData?.[`${keyPrefix}cash_and_equivalents`],
            'current_ratio': bundle.inputData?.[`${keyPrefix}current_ratio`],
            'quick_ratio': bundle.inputData?.[`${keyPrefix}quick_ratio`],
            'working_capital': bundle.inputData?.[`${keyPrefix}working_capital`],
        }
    },
}
