const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}display_name`,
                label: `[${labelPrefix}display_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}requires_api_key`,
                label: `[${labelPrefix}requires_api_key]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}services`,
                label: `[${labelPrefix}services]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}supports_label_creation`,
                label: `[${labelPrefix}supports_label_creation]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}supports_rate_estimation`,
                label: `[${labelPrefix}supports_rate_estimation]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}supports_tracking`,
                label: `[${labelPrefix}supports_tracking]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'display_name': bundle.inputData?.[`${keyPrefix}display_name`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'requires_api_key': bundle.inputData?.[`${keyPrefix}requires_api_key`],
            'services': bundle.inputData?.[`${keyPrefix}services`],
            'supports_label_creation': bundle.inputData?.[`${keyPrefix}supports_label_creation`],
            'supports_rate_estimation': bundle.inputData?.[`${keyPrefix}supports_rate_estimation`],
            'supports_tracking': bundle.inputData?.[`${keyPrefix}supports_tracking`],
        }
    },
}
