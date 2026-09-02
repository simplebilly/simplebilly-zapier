const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}confidence`,
                label: `[${labelPrefix}confidence]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}reasoning`,
                label: `[${labelPrefix}reasoning]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}suggested_priority`,
                label: `[${labelPrefix}suggested_priority]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}suggested_reply`,
                label: `[${labelPrefix}suggested_reply]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}suggested_status`,
                label: `[${labelPrefix}suggested_status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tool_calls`,
                label: `[${labelPrefix}tool_calls]`,
                required: true,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'confidence': bundle.inputData?.[`${keyPrefix}confidence`],
            'reasoning': bundle.inputData?.[`${keyPrefix}reasoning`],
            'suggested_priority': bundle.inputData?.[`${keyPrefix}suggested_priority`],
            'suggested_reply': bundle.inputData?.[`${keyPrefix}suggested_reply`],
            'suggested_status': bundle.inputData?.[`${keyPrefix}suggested_status`],
            'tool_calls': bundle.inputData?.[`${keyPrefix}tool_calls`],
        }
    },
}
