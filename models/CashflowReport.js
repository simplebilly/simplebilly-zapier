const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}closing_balance`,
                label: `[${labelPrefix}closing_balance]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}financing_cashflow`,
                label: `[${labelPrefix}financing_cashflow]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}investing_cashflow`,
                label: `[${labelPrefix}investing_cashflow]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}net_cashflow`,
                label: `[${labelPrefix}net_cashflow]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}opening_balance`,
                label: `[${labelPrefix}opening_balance]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}operating_cashflow`,
                label: `[${labelPrefix}operating_cashflow]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'closing_balance': bundle.inputData?.[`${keyPrefix}closing_balance`],
            'financing_cashflow': bundle.inputData?.[`${keyPrefix}financing_cashflow`],
            'investing_cashflow': bundle.inputData?.[`${keyPrefix}investing_cashflow`],
            'net_cashflow': bundle.inputData?.[`${keyPrefix}net_cashflow`],
            'opening_balance': bundle.inputData?.[`${keyPrefix}opening_balance`],
            'operating_cashflow': bundle.inputData?.[`${keyPrefix}operating_cashflow`],
            'period': bundle.inputData?.[`${keyPrefix}period`],
        }
    },
}
