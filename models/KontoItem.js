const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}anfangsbestand`,
                label: `[${labelPrefix}anfangsbestand]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}haben_umsatz`,
                label: `[${labelPrefix}haben_umsatz]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}konto`,
                label: `[${labelPrefix}konto]`,
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
                key: `${keyPrefix}saldo`,
                label: `[${labelPrefix}saldo]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}soll_umsatz`,
                label: `[${labelPrefix}soll_umsatz]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'anfangsbestand': bundle.inputData?.[`${keyPrefix}anfangsbestand`],
            'haben_umsatz': bundle.inputData?.[`${keyPrefix}haben_umsatz`],
            'konto': bundle.inputData?.[`${keyPrefix}konto`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'saldo': bundle.inputData?.[`${keyPrefix}saldo`],
            'soll_umsatz': bundle.inputData?.[`${keyPrefix}soll_umsatz`],
        }
    },
}
