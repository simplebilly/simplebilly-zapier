const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}account_number`,
                label: `[${labelPrefix}account_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}debit_credit`,
                label: `[${labelPrefix}debit_credit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}document_date`,
                label: `[${labelPrefix}document_date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}document_text`,
                label: `[${labelPrefix}document_text]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_amount`,
                label: `[${labelPrefix}net_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}opposite_account`,
                label: `[${labelPrefix}opposite_account]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_amount`,
                label: `[${labelPrefix}tax_amount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_rate`,
                label: `[${labelPrefix}tax_rate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account_number': bundle.inputData?.[`${keyPrefix}account_number`],
            'debit_credit': bundle.inputData?.[`${keyPrefix}debit_credit`],
            'document_date': bundle.inputData?.[`${keyPrefix}document_date`],
            'document_text': bundle.inputData?.[`${keyPrefix}document_text`],
            'net_amount': bundle.inputData?.[`${keyPrefix}net_amount`],
            'opposite_account': bundle.inputData?.[`${keyPrefix}opposite_account`],
            'tax_amount': bundle.inputData?.[`${keyPrefix}tax_amount`],
            'tax_rate': bundle.inputData?.[`${keyPrefix}tax_rate`],
        }
    },
}
