const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}gross`,
                label: `[${labelPrefix}gross]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}month`,
                label: `[${labelPrefix}month]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}net`,
                label: `[${labelPrefix}net]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gross': bundle.inputData?.[`${keyPrefix}gross`],
            'month': bundle.inputData?.[`${keyPrefix}month`],
            'net': bundle.inputData?.[`${keyPrefix}net`],
        }
    },
}
