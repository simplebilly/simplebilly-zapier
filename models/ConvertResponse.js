const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceNumber`,
                label: `[${labelPrefix}invoiceNumber]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}proformaId`,
                label: `[${labelPrefix}proformaId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}proformaNumber`,
                label: `[${labelPrefix}proformaNumber]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'invoiceNumber': bundle.inputData?.[`${keyPrefix}invoiceNumber`],
            'proformaId': bundle.inputData?.[`${keyPrefix}proformaId`],
            'proformaNumber': bundle.inputData?.[`${keyPrefix}proformaNumber`],
        }
    },
}
