const utils = require('../utils/utils');
const OffenlegungItem = require('../models/OffenlegungItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}deadline`,
                label: `Fristende (Abschlussstichtag + Frist). - [${labelPrefix}deadline]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}deadline_months`,
                label: `Offenlegungsfrist in Monaten (§ 325 Abs. 4 HGB). - [${labelPrefix}deadline_months]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: OffenlegungItem.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}kapitalmarktorientiert`,
                label: `Annahme über die Kapitalmarktorientierung. - [${labelPrefix}kapitalmarktorientiert]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}note`,
                label: `[${labelPrefix}note]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `Berichtsjahr (laufendes Kalenderjahr). - [${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'deadline': bundle.inputData?.[`${keyPrefix}deadline`],
            'deadline_months': bundle.inputData?.[`${keyPrefix}deadline_months`],
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, OffenlegungItem),
            'kapitalmarktorientiert': bundle.inputData?.[`${keyPrefix}kapitalmarktorientiert`],
            'note': bundle.inputData?.[`${keyPrefix}note`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
