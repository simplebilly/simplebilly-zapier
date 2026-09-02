const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instituteType`,
                label: `[${labelPrefix}instituteType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kapitalmarktorientiert`,
                label: `[${labelPrefix}kapitalmarktorientiert]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'instituteType': bundle.inputData?.[`${keyPrefix}instituteType`],
            'kapitalmarktorientiert': bundle.inputData?.[`${keyPrefix}kapitalmarktorientiert`],
        }
    },
}
