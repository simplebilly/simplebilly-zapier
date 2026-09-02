const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount_paid`,
                label: `[${labelPrefix}amount_paid]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}confidence`,
                label: `[${labelPrefix}confidence]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}customer_id`,
                label: `[${labelPrefix}customer_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoice_id`,
                label: `[${labelPrefix}invoice_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoice_number`,
                label: `[${labelPrefix}invoice_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}open_amount`,
                label: `[${labelPrefix}open_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_date`,
                label: `[${labelPrefix}payment_date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_id`,
                label: `[${labelPrefix}payment_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reference`,
                label: `[${labelPrefix}reference]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount_paid': bundle.inputData?.[`${keyPrefix}amount_paid`],
            'confidence': bundle.inputData?.[`${keyPrefix}confidence`],
            'customer_id': bundle.inputData?.[`${keyPrefix}customer_id`],
            'invoice_id': bundle.inputData?.[`${keyPrefix}invoice_id`],
            'invoice_number': bundle.inputData?.[`${keyPrefix}invoice_number`],
            'open_amount': bundle.inputData?.[`${keyPrefix}open_amount`],
            'payment_date': bundle.inputData?.[`${keyPrefix}payment_date`],
            'payment_id': bundle.inputData?.[`${keyPrefix}payment_id`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'reference': bundle.inputData?.[`${keyPrefix}reference`],
        }
    },
}
