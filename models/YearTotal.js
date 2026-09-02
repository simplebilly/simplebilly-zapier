const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}tco2e`,
                label: `[${labelPrefix}tco2e]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'tco2e': bundle.inputData?.[`${keyPrefix}tco2e`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
