const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}ausgaben`,
                label: `[${labelPrefix}ausgaben]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}einnahmen`,
                label: `[${labelPrefix}einnahmen]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ergebnis`,
                label: `[${labelPrefix}ergebnis]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}monat`,
                label: `[${labelPrefix}monat]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'ausgaben': bundle.inputData?.[`${keyPrefix}ausgaben`],
            'einnahmen': bundle.inputData?.[`${keyPrefix}einnahmen`],
            'ergebnis': bundle.inputData?.[`${keyPrefix}ergebnis`],
            'monat': bundle.inputData?.[`${keyPrefix}monat`],
        }
    },
}
