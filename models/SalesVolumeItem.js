const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contact_id`,
                label: `[${labelPrefix}contact_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_type`,
                label: `[${labelPrefix}contact_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_purchase_date`,
                label: `[${labelPrefix}last_purchase_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_invoices`,
                label: `[${labelPrefix}total_invoices]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total_revenue`,
                label: `[${labelPrefix}total_revenue]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contact_id': bundle.inputData?.[`${keyPrefix}contact_id`],
            'contact_type': bundle.inputData?.[`${keyPrefix}contact_type`],
            'last_purchase_date': bundle.inputData?.[`${keyPrefix}last_purchase_date`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'total_invoices': bundle.inputData?.[`${keyPrefix}total_invoices`],
            'total_revenue': bundle.inputData?.[`${keyPrefix}total_revenue`],
        }
    },
}
