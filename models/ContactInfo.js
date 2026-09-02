const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}hint`,
                label: `[${labelPrefix}hint]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hintEn`,
                label: `[${labelPrefix}hintEn]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}roleEn`,
                label: `[${labelPrefix}roleEn]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'hint': bundle.inputData?.[`${keyPrefix}hint`],
            'hintEn': bundle.inputData?.[`${keyPrefix}hintEn`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'roleEn': bundle.inputData?.[`${keyPrefix}roleEn`],
        }
    },
}
