const utils = require('../utils/utils');
const ReminderLevel = require('../models/ReminderLevel');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount_due`,
                label: `[${labelPrefix}amount_due]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount_paid`,
                label: `[${labelPrefix}amount_paid]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}customer_id`,
                label: `[${labelPrefix}customer_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}days_overdue`,
                label: `[${labelPrefix}days_overdue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}due_date`,
                label: `[${labelPrefix}due_date]`,
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
                key: `${keyPrefix}issue_date`,
                label: `[${labelPrefix}issue_date]`,
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
                key: `${keyPrefix}reminder_level`,
                ...ReminderLevel.fields(`${keyPrefix}reminder_level`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount_due': bundle.inputData?.[`${keyPrefix}amount_due`],
            'amount_paid': bundle.inputData?.[`${keyPrefix}amount_paid`],
            'customer_id': bundle.inputData?.[`${keyPrefix}customer_id`],
            'days_overdue': bundle.inputData?.[`${keyPrefix}days_overdue`],
            'due_date': bundle.inputData?.[`${keyPrefix}due_date`],
            'invoice_id': bundle.inputData?.[`${keyPrefix}invoice_id`],
            'invoice_number': bundle.inputData?.[`${keyPrefix}invoice_number`],
            'issue_date': bundle.inputData?.[`${keyPrefix}issue_date`],
            'open_amount': bundle.inputData?.[`${keyPrefix}open_amount`],
            'reminder_level': bundle.inputData?.[`${keyPrefix}reminder_level`],
        }
    },
}
