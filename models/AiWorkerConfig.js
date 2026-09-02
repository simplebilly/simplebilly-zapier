const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}auto_reply`,
                label: `[${labelPrefix}auto_reply]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}max_tool_calls`,
                label: `[${labelPrefix}max_tool_calls]`,
                required: true,
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenant_id`,
                label: `[${labelPrefix}tenant_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}trigger_on`,
                label: `[${labelPrefix}trigger_on]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${labelPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'auto_reply': bundle.inputData?.[`${keyPrefix}auto_reply`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'max_tool_calls': bundle.inputData?.[`${keyPrefix}max_tool_calls`],
            'model': bundle.inputData?.[`${keyPrefix}model`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'provider': bundle.inputData?.[`${keyPrefix}provider`],
            'system_prompt': bundle.inputData?.[`${keyPrefix}system_prompt`],
            'tenant_id': bundle.inputData?.[`${keyPrefix}tenant_id`],
            'trigger_on': bundle.inputData?.[`${keyPrefix}trigger_on`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
