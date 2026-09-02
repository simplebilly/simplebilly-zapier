const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bundesland`,
                label: `[${labelPrefix}bundesland]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}country_code`,
                label: `[${labelPrefix}country_code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gemeinde_name`,
                label: `[${labelPrefix}gemeinde_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gemeindeschluessel`,
                label: `[${labelPrefix}gemeindeschluessel]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hebesatz_gewerbesteuer`,
                label: `[${labelPrefix}hebesatz_gewerbesteuer]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}hebesatz_grundsteuer_b`,
                label: `[${labelPrefix}hebesatz_grundsteuer_b]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}landkreis`,
                label: `[${labelPrefix}landkreis]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}valid_from`,
                label: `[${labelPrefix}valid_from]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}valid_to`,
                label: `[${labelPrefix}valid_to]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bundesland': bundle.inputData?.[`${keyPrefix}bundesland`],
            'country_code': bundle.inputData?.[`${keyPrefix}country_code`],
            'gemeinde_name': bundle.inputData?.[`${keyPrefix}gemeinde_name`],
            'gemeindeschluessel': bundle.inputData?.[`${keyPrefix}gemeindeschluessel`],
            'hebesatz_gewerbesteuer': bundle.inputData?.[`${keyPrefix}hebesatz_gewerbesteuer`],
            'hebesatz_grundsteuer_b': bundle.inputData?.[`${keyPrefix}hebesatz_grundsteuer_b`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'landkreis': bundle.inputData?.[`${keyPrefix}landkreis`],
            'valid_from': bundle.inputData?.[`${keyPrefix}valid_from`],
            'valid_to': bundle.inputData?.[`${keyPrefix}valid_to`],
        }
    },
}
