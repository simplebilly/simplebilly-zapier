const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}betrag`,
                label: `Betrag in EUR (2 Nachkommastellen, als String formatiert). - [${labelPrefix}betrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}label`,
                label: `Deutsche Bezeichnung der Zeile. - [${labelPrefix}label]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'betrag': bundle.inputData?.[`${keyPrefix}betrag`],
            'label': bundle.inputData?.[`${keyPrefix}label`],
        }
    },
}
