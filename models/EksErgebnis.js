const utils = require('../utils/utils');
const EksMonatsWert = require('../models/EksMonatsWert');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}gesamtergebnis`,
                label: `[${labelPrefix}gesamtergebnis]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}monate`,
                label: `[${labelPrefix}monate]`,
                children: EksMonatsWert.fields(`${keyPrefix}monate${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}prognose_naechste_6_monate`,
                label: `[${labelPrefix}prognose_naechste_6_monate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}summe_ausgaben`,
                label: `[${labelPrefix}summe_ausgaben]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}summe_einnahmen`,
                label: `[${labelPrefix}summe_einnahmen]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeitraum_bis`,
                label: `[${labelPrefix}zeitraum_bis]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeitraum_von`,
                label: `[${labelPrefix}zeitraum_von]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gesamtergebnis': bundle.inputData?.[`${keyPrefix}gesamtergebnis`],
            'monate': utils.childMapping(bundle.inputData?.[`${keyPrefix}monate`], `${keyPrefix}monate`, EksMonatsWert),
            'prognose_naechste_6_monate': bundle.inputData?.[`${keyPrefix}prognose_naechste_6_monate`],
            'summe_ausgaben': bundle.inputData?.[`${keyPrefix}summe_ausgaben`],
            'summe_einnahmen': bundle.inputData?.[`${keyPrefix}summe_einnahmen`],
            'zeitraum_bis': bundle.inputData?.[`${keyPrefix}zeitraum_bis`],
            'zeitraum_von': bundle.inputData?.[`${keyPrefix}zeitraum_von`],
        }
    },
}
