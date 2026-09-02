const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}acceptedByName`,
                label: `[${labelPrefix}acceptedByName]`,
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
            'acceptedByName': bundle.inputData?.[`${keyPrefix}acceptedByName`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
