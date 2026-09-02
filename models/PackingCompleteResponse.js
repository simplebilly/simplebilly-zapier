const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}new_state`,
                label: `[${labelPrefix}new_state]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}order_number`,
                label: `[${labelPrefix}order_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'new_state': bundle.inputData?.[`${keyPrefix}new_state`],
            'order_number': bundle.inputData?.[`${keyPrefix}order_number`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
        }
    },
}
