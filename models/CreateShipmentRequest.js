const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}carrier`,
                label: `Carrier name as configured in shipping settings: `ups` or `dhl`. - [${labelPrefix}carrier]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}service`,
                label: `[${labelPrefix}service]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weight_kg`,
                label: `[${labelPrefix}weight_kg]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'service': bundle.inputData?.[`${keyPrefix}service`],
            'weight_kg': bundle.inputData?.[`${keyPrefix}weight_kg`],
        }
    },
}
