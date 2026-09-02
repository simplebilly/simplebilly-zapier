const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}height_cm`,
                label: `[${labelPrefix}height_cm]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}item_count`,
                label: `[${labelPrefix}item_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}length_cm`,
                label: `[${labelPrefix}length_cm]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}volume_cm3`,
                label: `[${labelPrefix}volume_cm3]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}width_cm`,
                label: `[${labelPrefix}width_cm]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'height_cm': bundle.inputData?.[`${keyPrefix}height_cm`],
            'item_count': bundle.inputData?.[`${keyPrefix}item_count`],
            'length_cm': bundle.inputData?.[`${keyPrefix}length_cm`],
            'volume_cm3': bundle.inputData?.[`${keyPrefix}volume_cm3`],
            'width_cm': bundle.inputData?.[`${keyPrefix}width_cm`],
        }
    },
}
