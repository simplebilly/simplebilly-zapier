const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}acquiredAt`,
                label: `Datum des Erwerbs der Beteiligung. - [${labelPrefix}acquiredAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}boardAppointment`,
                label: `Bestellungsrecht für Geschäftsführung/Aufsichtsrat (§ 290 Abs. 2 Nr. 2 HGB). - [${labelPrefix}boardAppointment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}companyName`,
                label: `Name des Beteiligungsunternehmens (§ 271 HGB). - [${labelPrefix}companyName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}controlAgreement`,
                label: `Beherrschungsvertrag (§ 290 Abs. 2 Nr. 3 HGB). - [${labelPrefix}controlAgreement]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}legalForm`,
                label: `Rechtsform, z. B. \"GmbH\". - [${labelPrefix}legalForm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ownershipPct`,
                label: `Anteilsquote in Prozent (§ 271 HGB; > 20 % widerlegbare Vermutung). - [${labelPrefix}ownershipPct]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purposeVehicle`,
                label: `Zweckgesellschaft (§ 290 Abs. 2 Nr. 4 HGB). - [${labelPrefix}purposeVehicle]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}votingMajority`,
                label: `Stimmrechtsmehrheit (§ 290 Abs. 2 Nr. 1 HGB). - [${labelPrefix}votingMajority]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'acquiredAt': bundle.inputData?.[`${keyPrefix}acquiredAt`],
            'boardAppointment': bundle.inputData?.[`${keyPrefix}boardAppointment`],
            'companyName': bundle.inputData?.[`${keyPrefix}companyName`],
            'controlAgreement': bundle.inputData?.[`${keyPrefix}controlAgreement`],
            'legalForm': bundle.inputData?.[`${keyPrefix}legalForm`],
            'ownershipPct': bundle.inputData?.[`${keyPrefix}ownershipPct`],
            'purposeVehicle': bundle.inputData?.[`${keyPrefix}purposeVehicle`],
            'votingMajority': bundle.inputData?.[`${keyPrefix}votingMajority`],
        }
    },
}
