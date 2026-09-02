const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}address`,
                label: `Anschrift des Aktionärs (§ 67 Abs. 1 AktG). - [${labelPrefix}address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}birthDate`,
                label: `Geburtsdatum des Aktionärs (§ 67 Abs. 1 AktG). - [${labelPrefix}birthDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Elektronische Adresse (E-Mail) für die Kommunikation der Gesellschaft. - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstName`,
                label: `Vorname des Aktionärs (§ 67 Abs. 1 AktG). - [${labelPrefix}firstName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `Nachname des Aktionärs (§ 67 Abs. 1 AktG). - [${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shareNumber`,
                label: `Aktiennummer bzw. Sammelurkunde (bei Nennbetragsaktien). - [${labelPrefix}shareNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shares`,
                label: `Stückzahl der gehaltenen Stückaktien (§ 67 Abs. 1 AktG). - [${labelPrefix}shares]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'birthDate': bundle.inputData?.[`${keyPrefix}birthDate`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'shareNumber': bundle.inputData?.[`${keyPrefix}shareNumber`],
            'shares': bundle.inputData?.[`${keyPrefix}shares`],
        }
    },
}
