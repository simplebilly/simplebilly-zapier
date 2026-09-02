const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}beschaefigte`,
                label: `[${labelPrefix}beschaefigte]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'beschaefigte': bundle.inputData?.[`${keyPrefix}beschaefigte`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
