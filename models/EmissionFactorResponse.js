const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}category_id`,
                label: `[${labelPrefix}category_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kg_co2e_per_unit`,
                label: `[${labelPrefix}kg_co2e_per_unit]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}name_de`,
                label: `[${labelPrefix}name_de]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                label: `[${labelPrefix}source]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}unit`,
                label: `[${labelPrefix}unit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'category_id': bundle.inputData?.[`${keyPrefix}category_id`],
            'kg_co2e_per_unit': bundle.inputData?.[`${keyPrefix}kg_co2e_per_unit`],
            'name_de': bundle.inputData?.[`${keyPrefix}name_de`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
