const utils = require('../utils/utils');
const KonzernBeteiligung = require('../models/KonzernBeteiligung');
const KonzernThresholds = require('../models/KonzernThresholds');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}groessenbefreit`,
                label: `[${labelPrefix}groessenbefreit]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}kapitalmarktorientiert`,
                label: `[${labelPrefix}kapitalmarktorientiert]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}konzernabschlusspflicht`,
                label: `[${labelPrefix}konzernabschlusspflicht]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}missing_group_figures`,
                label: `Keine group_figures-Zeile für das Jahr vorhanden → keine Größenbefreiung. - [${labelPrefix}missing_group_figures]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mutterunternehmen`,
                label: `Mutterunternehmen: mindestens eine beherrschte Beteiligung (§ 290 Abs. 1 HGB). - [${labelPrefix}mutterunternehmen]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}parent_name`,
                label: `Mutterunternehmen für die Zwischenholding-Befreiung (§ 291 HGB). - [${labelPrefix}parent_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parent_situs`,
                label: `[${labelPrefix}parent_situs]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}participations`,
                label: `[${labelPrefix}participations]`,
                children: KonzernBeteiligung.fields(`${keyPrefix}participations${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...KonzernThresholds.fields(`${keyPrefix}thresholds`, isInput),
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}zwischenholding_befreit`,
                label: `[${labelPrefix}zwischenholding_befreit]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}zwischenholding_hinweis`,
                label: `Hinweis zu den § 291-Voraussetzungen (EU/EWR-Sitz, geprüfter Konzernabschluss). - [${labelPrefix}zwischenholding_hinweis]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'groessenbefreit': bundle.inputData?.[`${keyPrefix}groessenbefreit`],
            'kapitalmarktorientiert': bundle.inputData?.[`${keyPrefix}kapitalmarktorientiert`],
            'konzernabschlusspflicht': bundle.inputData?.[`${keyPrefix}konzernabschlusspflicht`],
            'missing_group_figures': bundle.inputData?.[`${keyPrefix}missing_group_figures`],
            'mutterunternehmen': bundle.inputData?.[`${keyPrefix}mutterunternehmen`],
            'parent_name': bundle.inputData?.[`${keyPrefix}parent_name`],
            'parent_situs': bundle.inputData?.[`${keyPrefix}parent_situs`],
            'participations': utils.childMapping(bundle.inputData?.[`${keyPrefix}participations`], `${keyPrefix}participations`, KonzernBeteiligung),
            'thresholds': utils.removeIfEmpty(KonzernThresholds.mapping(bundle, `${keyPrefix}thresholds`)),
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'zwischenholding_befreit': bundle.inputData?.[`${keyPrefix}zwischenholding_befreit`],
            'zwischenholding_hinweis': bundle.inputData?.[`${keyPrefix}zwischenholding_hinweis`],
        }
    },
}
