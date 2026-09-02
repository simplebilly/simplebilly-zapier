const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}gesamt`,
                label: `[${labelPrefix}gesamt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesamtbelastung`,
                label: `[${labelPrefix}gesamtbelastung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewerbesteuer`,
                label: `[${labelPrefix}gewerbesteuer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewinn`,
                label: `[${labelPrefix}gewinn]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ist_kapitalgesellschaft`,
                label: `[${labelPrefix}ist_kapitalgesellschaft]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}koerperschaftsteuer`,
                label: `[${labelPrefix}koerperschaftsteuer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}solidaritaetszuschlag`,
                label: `[${labelPrefix}solidaritaetszuschlag]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gesamt': bundle.inputData?.[`${keyPrefix}gesamt`],
            'gesamtbelastung': bundle.inputData?.[`${keyPrefix}gesamtbelastung`],
            'gewerbesteuer': bundle.inputData?.[`${keyPrefix}gewerbesteuer`],
            'gewinn': bundle.inputData?.[`${keyPrefix}gewinn`],
            'ist_kapitalgesellschaft': bundle.inputData?.[`${keyPrefix}ist_kapitalgesellschaft`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'koerperschaftsteuer': bundle.inputData?.[`${keyPrefix}koerperschaftsteuer`],
            'solidaritaetszuschlag': bundle.inputData?.[`${keyPrefix}solidaritaetszuschlag`],
        }
    },
}
