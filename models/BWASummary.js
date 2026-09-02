const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}gross_profit`,
                label: `[${labelPrefix}gross_profit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_profit`,
                label: `[${labelPrefix}net_profit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}open_invoices_count`,
                label: `[${labelPrefix}open_invoices_count]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}open_invoices_total`,
                label: `[${labelPrefix}open_invoices_total]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}overdue_invoices_count`,
                label: `[${labelPrefix}overdue_invoices_count]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}overdue_invoices_total`,
                label: `[${labelPrefix}overdue_invoices_total]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}profit_margin`,
                label: `[${labelPrefix}profit_margin]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gross_profit': bundle.inputData?.[`${keyPrefix}gross_profit`],
            'net_profit': bundle.inputData?.[`${keyPrefix}net_profit`],
            'open_invoices_count': bundle.inputData?.[`${keyPrefix}open_invoices_count`],
            'open_invoices_total': bundle.inputData?.[`${keyPrefix}open_invoices_total`],
            'overdue_invoices_count': bundle.inputData?.[`${keyPrefix}overdue_invoices_count`],
            'overdue_invoices_total': bundle.inputData?.[`${keyPrefix}overdue_invoices_total`],
            'profit_margin': bundle.inputData?.[`${keyPrefix}profit_margin`],
        }
    },
}
