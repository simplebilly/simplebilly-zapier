const utils = require('../utils/utils');
const DeclarationType = require('../models/DeclarationType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}declarationType`,
                ...DeclarationType.fields(`${keyPrefix}declarationType`, isInput),
            },
            {
                key: `${keyPrefix}isCurrent`,
                label: `Kennzeichnet die aktuell gültige Fassung (max. eine je Mandant). - [${labelPrefix}isCurrent]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}text`,
                label: `Inhalt der Erklärung als Markdown. - [${labelPrefix}text]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validFrom`,
                label: `Datum, ab dem die Erklärung gilt. - [${labelPrefix}validFrom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `Versionsbezeichnung der Erklärung (z.B. \"2025-01\"). - [${labelPrefix}version]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'declarationType': bundle.inputData?.[`${keyPrefix}declarationType`],
            'isCurrent': bundle.inputData?.[`${keyPrefix}isCurrent`],
            'text': bundle.inputData?.[`${keyPrefix}text`],
            'validFrom': bundle.inputData?.[`${keyPrefix}validFrom`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
