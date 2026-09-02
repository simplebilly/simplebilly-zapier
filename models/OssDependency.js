const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}dependency_type`,
                label: `[${labelPrefix}dependency_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}license`,
                label: `[${labelPrefix}license]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dependency_type': bundle.inputData?.[`${keyPrefix}dependency_type`],
            'license': bundle.inputData?.[`${keyPrefix}license`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
