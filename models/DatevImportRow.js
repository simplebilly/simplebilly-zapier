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
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}base_amount`,
                label: `[${labelPrefix}base_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}base_currency`,
                label: `[${labelPrefix}base_currency]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}booking_text`,
                label: `[${labelPrefix}booking_text]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}bu_key`,
                label: `[${labelPrefix}bu_key]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost_center1`,
                label: `[${labelPrefix}cost_center1]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost_center2`,
                label: `[${labelPrefix}cost_center2]`,
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
                key: `${keyPrefix}debit_credit`,
                label: `[${labelPrefix}debit_credit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount`,
                label: `[${labelPrefix}discount]`,
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
                key: `${keyPrefix}document_field2`,
                label: `[${labelPrefix}document_field2]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}document_number`,
                label: `[${labelPrefix}document_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}eu_country_vat_id`,
                label: `[${labelPrefix}eu_country_vat_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}eu_tax_rate`,
                label: `[${labelPrefix}eu_tax_rate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}exchange_rate`,
                label: `[${labelPrefix}exchange_rate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}opposite_account`,
                label: `[${labelPrefix}opposite_account]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account': bundle.inputData?.[`${keyPrefix}account`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'base_amount': bundle.inputData?.[`${keyPrefix}base_amount`],
            'base_currency': bundle.inputData?.[`${keyPrefix}base_currency`],
            'booking_text': bundle.inputData?.[`${keyPrefix}booking_text`],
            'bu_key': bundle.inputData?.[`${keyPrefix}bu_key`],
            'cost_center1': bundle.inputData?.[`${keyPrefix}cost_center1`],
            'cost_center2': bundle.inputData?.[`${keyPrefix}cost_center2`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'debit_credit': bundle.inputData?.[`${keyPrefix}debit_credit`],
            'discount': bundle.inputData?.[`${keyPrefix}discount`],
            'document_date': bundle.inputData?.[`${keyPrefix}document_date`],
            'document_field2': bundle.inputData?.[`${keyPrefix}document_field2`],
            'document_number': bundle.inputData?.[`${keyPrefix}document_number`],
            'eu_country_vat_id': bundle.inputData?.[`${keyPrefix}eu_country_vat_id`],
            'eu_tax_rate': bundle.inputData?.[`${keyPrefix}eu_tax_rate`],
            'exchange_rate': bundle.inputData?.[`${keyPrefix}exchange_rate`],
            'opposite_account': bundle.inputData?.[`${keyPrefix}opposite_account`],
        }
    },
}
