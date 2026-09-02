const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}exists`,
                label: `Ob die zugrunde liegenden Daten im System vorhanden sind. - [${labelPrefix}exists]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Bezeichnung des Offenlegungsbestandteils (§ 325 Abs. 1 HGB). - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                label: `Woher der Bestandteil stammt bzw. fehlt. - [${labelPrefix}source]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'exists': bundle.inputData?.[`${keyPrefix}exists`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
        }
    },
}
