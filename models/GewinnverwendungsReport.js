const utils = require('../utils/utils');
const GewinnverwendungsZeile = require('../models/GewinnverwendungsZeile');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bilanzgewinn`,
                label: `Bilanzgewinn nach Einstellung (§ 174 AktG, Beschluss der HV). - [${labelPrefix}bilanzgewinn]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesetzliche_ruecklage_bestand`,
                label: `[${labelPrefix}gesetzliche_ruecklage_bestand]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesetzliche_ruecklage_cap`,
                label: `Deckel: 10 % des Grundkapitals (§ 150 Abs. 2 AktG). - [${labelPrefix}gesetzliche_ruecklage_cap]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesetzliche_ruecklage_nach`,
                label: `Rücklage nach Einstellung. - [${labelPrefix}gesetzliche_ruecklage_nach]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesetzliche_ruecklage_soll`,
                label: `Vorgeschlagene Einstellung in die gesetzliche Rücklage (§ 150 Abs. 2 AktG). - [${labelPrefix}gesetzliche_ruecklage_soll]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gezeichnetes_kapital`,
                label: `[${labelPrefix}gezeichnetes_kapital]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jahresueberschuss`,
                label: `[${labelPrefix}jahresueberschuss]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}zeilen`,
                label: `[${labelPrefix}zeilen]`,
                children: GewinnverwendungsZeile.fields(`${keyPrefix}zeilen${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bilanzgewinn': bundle.inputData?.[`${keyPrefix}bilanzgewinn`],
            'gesetzliche_ruecklage_bestand': bundle.inputData?.[`${keyPrefix}gesetzliche_ruecklage_bestand`],
            'gesetzliche_ruecklage_cap': bundle.inputData?.[`${keyPrefix}gesetzliche_ruecklage_cap`],
            'gesetzliche_ruecklage_nach': bundle.inputData?.[`${keyPrefix}gesetzliche_ruecklage_nach`],
            'gesetzliche_ruecklage_soll': bundle.inputData?.[`${keyPrefix}gesetzliche_ruecklage_soll`],
            'gezeichnetes_kapital': bundle.inputData?.[`${keyPrefix}gezeichnetes_kapital`],
            'jahresueberschuss': bundle.inputData?.[`${keyPrefix}jahresueberschuss`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'zeilen': utils.childMapping(bundle.inputData?.[`${keyPrefix}zeilen`], `${keyPrefix}zeilen`, GewinnverwendungsZeile),
        }
    },
}
