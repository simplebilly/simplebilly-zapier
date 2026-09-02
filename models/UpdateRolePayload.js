const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sync_permissions`,
                label: `[${labelPrefix}sync_permissions]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'sync_permissions': bundle.inputData?.[`${keyPrefix}sync_permissions`],
        }
    },
}
