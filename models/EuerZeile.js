const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}abschnitt`,
                label: `[${labelPrefix}abschnitt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}betrag`,
                label: `[${labelPrefix}betrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}bezeichnung`,
                label: `[${labelPrefix}bezeichnung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeile`,
                label: `[${labelPrefix}zeile]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'abschnitt': bundle.inputData?.[`${keyPrefix}abschnitt`],
            'betrag': bundle.inputData?.[`${keyPrefix}betrag`],
            'bezeichnung': bundle.inputData?.[`${keyPrefix}bezeichnung`],
            'zeile': bundle.inputData?.[`${keyPrefix}zeile`],
        }
    },
}
