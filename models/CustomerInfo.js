const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}annual_volume`,
                label: `[${labelPrefix}annual_volume]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}is_registered`,
                label: `[${labelPrefix}is_registered]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'annual_volume': bundle.inputData?.[`${keyPrefix}annual_volume`],
            'is_registered': bundle.inputData?.[`${keyPrefix}is_registered`],
        }
    },
}
