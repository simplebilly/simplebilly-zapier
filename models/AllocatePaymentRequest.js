const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}invoice_id`,
                label: `[${labelPrefix}invoice_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_id`,
                label: `[${labelPrefix}payment_id]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'invoice_id': bundle.inputData?.[`${keyPrefix}invoice_id`],
            'payment_id': bundle.inputData?.[`${keyPrefix}payment_id`],
        }
    },
}
