const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bilanzsumme`,
                label: `[${labelPrefix}bilanzsumme]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}mitarbeiter`,
                label: `[${labelPrefix}mitarbeiter]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}netto_umsatz`,
                label: `[${labelPrefix}netto_umsatz]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bilanzsumme': bundle.inputData?.[`${keyPrefix}bilanzsumme`],
            'mitarbeiter': bundle.inputData?.[`${keyPrefix}mitarbeiter`],
            'netto_umsatz': bundle.inputData?.[`${keyPrefix}netto_umsatz`],
        }
    },
}
