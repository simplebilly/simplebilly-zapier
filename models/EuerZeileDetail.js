const utils = require('../utils/utils');
const EuerKatSumme = require('../models/EuerKatSumme');

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
                key: `${keyPrefix}betrag_gesamt`,
                label: `[${labelPrefix}betrag_gesamt]`,
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
                key: `${keyPrefix}kategorien`,
                label: `[${labelPrefix}kategorien]`,
                children: EuerKatSumme.fields(`${keyPrefix}kategorien${!isInput ? '[]' : ''}`, isInput, true), 
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
            'betrag_gesamt': bundle.inputData?.[`${keyPrefix}betrag_gesamt`],
            'bezeichnung': bundle.inputData?.[`${keyPrefix}bezeichnung`],
            'kategorien': utils.childMapping(bundle.inputData?.[`${keyPrefix}kategorien`], `${keyPrefix}kategorien`, EuerKatSumme),
            'zeile': bundle.inputData?.[`${keyPrefix}zeile`],
        }
    },
}
