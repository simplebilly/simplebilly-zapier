const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}module`,
                label: `[${labelPrefix}module]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}regulations`,
                label: `[${labelPrefix}regulations]`,
                required: true,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'module': bundle.inputData?.[`${keyPrefix}module`],
            'regulations': bundle.inputData?.[`${keyPrefix}regulations`],
        }
    },
}
