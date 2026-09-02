const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}custom_domain`,
                label: `[${labelPrefix}custom_domain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}subdomain`,
                label: `[${labelPrefix}subdomain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenant_id`,
                label: `[${labelPrefix}tenant_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenant_name`,
                label: `[${labelPrefix}tenant_name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'custom_domain': bundle.inputData?.[`${keyPrefix}custom_domain`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'subdomain': bundle.inputData?.[`${keyPrefix}subdomain`],
            'tenant_id': bundle.inputData?.[`${keyPrefix}tenant_id`],
            'tenant_name': bundle.inputData?.[`${keyPrefix}tenant_name`],
        }
    },
}
