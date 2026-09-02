const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}docType`,
                label: `[${labelPrefix}docType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lang`,
                label: `[${labelPrefix}lang]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'docType': bundle.inputData?.[`${keyPrefix}docType`],
            'lang': bundle.inputData?.[`${keyPrefix}lang`],
        }
    },
}
