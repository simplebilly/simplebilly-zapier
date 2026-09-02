const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_type`,
                label: `[${labelPrefix}discount_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_value`,
                label: `[${labelPrefix}discount_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}discounted_amount`,
                label: `[${labelPrefix}discounted_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}max_discount_amount`,
                label: `[${labelPrefix}max_discount_amount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}valid`,
                label: `[${labelPrefix}valid]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'discount_type': bundle.inputData?.[`${keyPrefix}discount_type`],
            'discount_value': bundle.inputData?.[`${keyPrefix}discount_value`],
            'discounted_amount': bundle.inputData?.[`${keyPrefix}discounted_amount`],
            'max_discount_amount': bundle.inputData?.[`${keyPrefix}max_discount_amount`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'valid': bundle.inputData?.[`${keyPrefix}valid`],
        }
    },
}
