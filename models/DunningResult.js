const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}invoices_processed`,
                label: `[${labelPrefix}invoices_processed]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'invoices_processed': bundle.inputData?.[`${keyPrefix}invoices_processed`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
        }
    },
}
