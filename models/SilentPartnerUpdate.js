const utils = require('../utils/utils');
const InstrumentType = require('../models/InstrumentType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contractDate`,
                label: `Datum des Vertragsabschlusses. - [${labelPrefix}contractDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}einlage`,
                label: `Einlage (§ 230 HGB). - [${labelPrefix}einlage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewinnquotePct`,
                label: `Gewinnbeteiligungsquote in Prozent (§ 231 HGB). - [${labelPrefix}gewinnquotePct]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewinnvortrag`,
                label: `Nicht erhobene Gewinne (§ 232 Abs. 3 HGB). - [${labelPrefix}gewinnvortrag]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instrumentType`,
                ...InstrumentType.fields(`${keyPrefix}instrumentType`, isInput),
            },
            {
                key: `${keyPrefix}kestPflichtig`,
                label: `25 % Kapitalertragsteuer einbehalten (§ 43 Abs. 1 Nr. 3 EStG; typisch + partiarisches Darlehen). - [${labelPrefix}kestPflichtig]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Name des stillen Gesellschafters. - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Freitext-Notizen. - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verlustVerrechnungskonto`,
                label: `Kumulierte Verluste gegen die Einlage (§ 232 Abs. 2 HGB, ≤ Einlage). - [${labelPrefix}verlustVerrechnungskonto]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verlustbeteiligung`,
                label: `Verlustbeteiligung (§ 231 Abs. 2 HGB; kann ausgeschlossen werden). - [${labelPrefix}verlustbeteiligung]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contractDate': bundle.inputData?.[`${keyPrefix}contractDate`],
            'einlage': bundle.inputData?.[`${keyPrefix}einlage`],
            'gewinnquotePct': bundle.inputData?.[`${keyPrefix}gewinnquotePct`],
            'gewinnvortrag': bundle.inputData?.[`${keyPrefix}gewinnvortrag`],
            'instrumentType': bundle.inputData?.[`${keyPrefix}instrumentType`],
            'kestPflichtig': bundle.inputData?.[`${keyPrefix}kestPflichtig`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'verlustVerrechnungskonto': bundle.inputData?.[`${keyPrefix}verlustVerrechnungskonto`],
            'verlustbeteiligung': bundle.inputData?.[`${keyPrefix}verlustbeteiligung`],
        }
    },
}
