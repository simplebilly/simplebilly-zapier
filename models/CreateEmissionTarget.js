const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}base_value`,
                label: `[${labelPrefix}base_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}base_year`,
                label: `[${labelPrefix}base_year]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}scope`,
                label: `[${labelPrefix}scope]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}target_value`,
                label: `[${labelPrefix}target_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}target_year`,
                label: `[${labelPrefix}target_year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'base_value': bundle.inputData?.[`${keyPrefix}base_value`],
            'base_year': bundle.inputData?.[`${keyPrefix}base_year`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'scope': bundle.inputData?.[`${keyPrefix}scope`],
            'target_value': bundle.inputData?.[`${keyPrefix}target_value`],
            'target_year': bundle.inputData?.[`${keyPrefix}target_year`],
        }
    },
}
