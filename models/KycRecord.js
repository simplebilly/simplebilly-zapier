const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}customerId`,
                label: `Referenz auf den Kunden/Kontakt. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerName`,
                label: `Name des Kunden (für die Suche). - [${labelPrefix}customerName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kycDate`,
                label: `Datum der KYC-Prüfung (GwG § 8). - [${labelPrefix}kycDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Freitext-Notizen. - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}retentionUntil`,
                label: `Aufbewahrungsfrist (GwG § 8 Abs. 4: 5 Jahre). - [${labelPrefix}retentionUntil]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}riskAssessment`,
                label: `Risikoeinschätzung (z. B. Risikoklasse). - [${labelPrefix}riskAssessment]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'customerName': bundle.inputData?.[`${keyPrefix}customerName`],
            'kycDate': bundle.inputData?.[`${keyPrefix}kycDate`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'retentionUntil': bundle.inputData?.[`${keyPrefix}retentionUntil`],
            'riskAssessment': bundle.inputData?.[`${keyPrefix}riskAssessment`],
        }
    },
}
