const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}scope`,
                label: `[${labelPrefix}scope]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tco2e`,
                label: `[${labelPrefix}tco2e]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'scope': bundle.inputData?.[`${keyPrefix}scope`],
            'tco2e': bundle.inputData?.[`${keyPrefix}tco2e`],
        }
    },
}
