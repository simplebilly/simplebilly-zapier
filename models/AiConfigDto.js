const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}auto_reply`,
                label: `[${labelPrefix}auto_reply]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}max_tool_calls`,
                label: `[${labelPrefix}max_tool_calls]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}model`,
                label: `[${labelPrefix}model]`,
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
                key: `${keyPrefix}provider`,
                label: `[${labelPrefix}provider]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}system_prompt`,
                label: `[${labelPrefix}system_prompt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trigger_on`,
                label: `[${labelPrefix}trigger_on]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'auto_reply': bundle.inputData?.[`${keyPrefix}auto_reply`],
            'max_tool_calls': bundle.inputData?.[`${keyPrefix}max_tool_calls`],
            'model': bundle.inputData?.[`${keyPrefix}model`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'provider': bundle.inputData?.[`${keyPrefix}provider`],
            'system_prompt': bundle.inputData?.[`${keyPrefix}system_prompt`],
            'trigger_on': bundle.inputData?.[`${keyPrefix}trigger_on`],
        }
    },
}
