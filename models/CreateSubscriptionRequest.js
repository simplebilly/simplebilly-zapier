const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}event_type`,
                label: `[${labelPrefix}event_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}secret`,
                label: `[${labelPrefix}secret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'event_type': bundle.inputData?.[`${keyPrefix}event_type`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'secret': bundle.inputData?.[`${keyPrefix}secret`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
        }
    },
}
