const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contact_id`,
                label: `[${labelPrefix}contact_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_name`,
                label: `[${labelPrefix}contact_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paid_amount`,
                label: `[${labelPrefix}paid_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_amount`,
                label: `[${labelPrefix}total_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucher_date`,
                label: `[${labelPrefix}voucher_date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucher_number`,
                label: `[${labelPrefix}voucher_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucher_status`,
                label: `[${labelPrefix}voucher_status]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contact_id': bundle.inputData?.[`${keyPrefix}contact_id`],
            'contact_name': bundle.inputData?.[`${keyPrefix}contact_name`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'paid_amount': bundle.inputData?.[`${keyPrefix}paid_amount`],
            'total_amount': bundle.inputData?.[`${keyPrefix}total_amount`],
            'voucher_date': bundle.inputData?.[`${keyPrefix}voucher_date`],
            'voucher_number': bundle.inputData?.[`${keyPrefix}voucher_number`],
            'voucher_status': bundle.inputData?.[`${keyPrefix}voucher_status`],
        }
    },
}
