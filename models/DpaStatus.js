const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}accepted`,
                label: `[${labelPrefix}accepted]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}acceptedAt`,
                label: `[${labelPrefix}acceptedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}acceptedBy`,
                label: `[${labelPrefix}acceptedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'accepted': bundle.inputData?.[`${keyPrefix}accepted`],
            'acceptedAt': bundle.inputData?.[`${keyPrefix}acceptedAt`],
            'acceptedBy': bundle.inputData?.[`${keyPrefix}acceptedBy`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
