const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}discount_days`,
                label: `[${labelPrefix}discount_days]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}discount_percentage`,
                label: `[${labelPrefix}discount_percentage]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_term_days`,
                label: `[${labelPrefix}payment_term_days]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'discount_days': bundle.inputData?.[`${keyPrefix}discount_days`],
            'discount_percentage': bundle.inputData?.[`${keyPrefix}discount_percentage`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'payment_term_days': bundle.inputData?.[`${keyPrefix}payment_term_days`],
        }
    },
}
