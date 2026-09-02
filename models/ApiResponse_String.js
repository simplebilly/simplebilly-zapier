const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}error`,
                label: `[${labelPrefix}error]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
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
            'data': bundle.inputData?.[`${keyPrefix}data`],
            'error': bundle.inputData?.[`${keyPrefix}error`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
        }
    },
}
