const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}activity_value`,
                label: `[${labelPrefix}activity_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}category_id`,
                label: `[${labelPrefix}category_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}method`,
                label: `[${labelPrefix}method]`,
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
                key: `${keyPrefix}unit`,
                label: `[${labelPrefix}unit]`,
                required: true,
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
            'activity_value': bundle.inputData?.[`${keyPrefix}activity_value`],
            'category_id': bundle.inputData?.[`${keyPrefix}category_id`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'method': bundle.inputData?.[`${keyPrefix}method`],
            'scope': bundle.inputData?.[`${keyPrefix}scope`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
