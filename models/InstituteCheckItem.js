const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}exists`,
                label: `[${labelPrefix}exists]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                label: `[${labelPrefix}source]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'exists': bundle.inputData?.[`${keyPrefix}exists`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
        }
    },
}
