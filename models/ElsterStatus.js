const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}cert_configured`,
                label: `[${labelPrefix}cert_configured]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}eric_available`,
                label: `[${labelPrefix}eric_available]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}eric_version`,
                label: `[${labelPrefix}eric_version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}feature_enabled`,
                label: `[${labelPrefix}feature_enabled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}hint`,
                label: `[${labelPrefix}hint]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}mode`,
                label: `[${labelPrefix}mode]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vendor_id_configured`,
                label: `[${labelPrefix}vendor_id_configured]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'cert_configured': bundle.inputData?.[`${keyPrefix}cert_configured`],
            'eric_available': bundle.inputData?.[`${keyPrefix}eric_available`],
            'eric_version': bundle.inputData?.[`${keyPrefix}eric_version`],
            'feature_enabled': bundle.inputData?.[`${keyPrefix}feature_enabled`],
            'hint': bundle.inputData?.[`${keyPrefix}hint`],
            'mode': bundle.inputData?.[`${keyPrefix}mode`],
            'vendor_id_configured': bundle.inputData?.[`${keyPrefix}vendor_id_configured`],
        }
    },
}
