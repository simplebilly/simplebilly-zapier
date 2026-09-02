const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}height_cm`,
                label: `[${labelPrefix}height_cm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}length_cm`,
                label: `[${labelPrefix}length_cm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}reference`,
                label: `[${labelPrefix}reference]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weight_kg`,
                label: `[${labelPrefix}weight_kg]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}width_cm`,
                label: `[${labelPrefix}width_cm]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'height_cm': bundle.inputData?.[`${keyPrefix}height_cm`],
            'length_cm': bundle.inputData?.[`${keyPrefix}length_cm`],
            'reference': bundle.inputData?.[`${keyPrefix}reference`],
            'weight_kg': bundle.inputData?.[`${keyPrefix}weight_kg`],
            'width_cm': bundle.inputData?.[`${keyPrefix}width_cm`],
        }
    },
}
