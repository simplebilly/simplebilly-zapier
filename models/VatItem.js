const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}net_amount`,
                label: `[${labelPrefix}net_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_amount`,
                label: `[${labelPrefix}tax_amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_rate`,
                label: `[${labelPrefix}tax_rate]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'net_amount': bundle.inputData?.[`${keyPrefix}net_amount`],
            'tax_amount': bundle.inputData?.[`${keyPrefix}tax_amount`],
            'tax_rate': bundle.inputData?.[`${keyPrefix}tax_rate`],
        }
    },
}
