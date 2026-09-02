const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bezeichnung`,
                label: `[${labelPrefix}bezeichnung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kennzeichen`,
                label: `[${labelPrefix}kennzeichen]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}privat_anteil_prozent`,
                label: `[${labelPrefix}privat_anteil_prozent]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bezeichnung': bundle.inputData?.[`${keyPrefix}bezeichnung`],
            'kennzeichen': bundle.inputData?.[`${keyPrefix}kennzeichen`],
            'privat_anteil_prozent': bundle.inputData?.[`${keyPrefix}privat_anteil_prozent`],
        }
    },
}
