const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bilanzsumme`,
                label: `Bilanzsumme in EUR (§ 293 Abs. 1 Nr. 1 HGB). - [${labelPrefix}bilanzsumme]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}exemptionClaimed`,
                label: `§ 291-Befreiung in Anspruch genommen. - [${labelPrefix}exemptionClaimed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mitarbeiter`,
                label: `Durchschnittliche Arbeitnehmerzahl (§ 293 Abs. 1 Nr. 3 HGB). - [${labelPrefix}mitarbeiter]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}nettoUmsatz`,
                label: `Netto-Umsatzerlöse in EUR (§ 293 Abs. 1 Nr. 2 HGB). - [${labelPrefix}nettoUmsatz]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentName`,
                label: `Name des Mutterunternehmens (§ 291 HGB, Zwischenholding). - [${labelPrefix}parentName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentSitus`,
                label: `Sitz des Mutterunternehmens, z. B. \"EU/EWR\" (§ 291 HGB). - [${labelPrefix}parentSitus]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bilanzsumme': bundle.inputData?.[`${keyPrefix}bilanzsumme`],
            'exemptionClaimed': bundle.inputData?.[`${keyPrefix}exemptionClaimed`],
            'mitarbeiter': bundle.inputData?.[`${keyPrefix}mitarbeiter`],
            'nettoUmsatz': bundle.inputData?.[`${keyPrefix}nettoUmsatz`],
            'parentName': bundle.inputData?.[`${keyPrefix}parentName`],
            'parentSitus': bundle.inputData?.[`${keyPrefix}parentSitus`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
