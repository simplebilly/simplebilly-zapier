const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
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
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
