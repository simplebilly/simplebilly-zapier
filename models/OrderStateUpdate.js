const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}send_state_to_shop`,
                label: `[${labelPrefix}send_state_to_shop]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'send_state_to_shop': bundle.inputData?.[`${keyPrefix}send_state_to_shop`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
        }
    },
}
