const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}docType`,
                label: `[${labelPrefix}docType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lang`,
                label: `[${labelPrefix}lang]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'docType': bundle.inputData?.[`${keyPrefix}docType`],
            'lang': bundle.inputData?.[`${keyPrefix}lang`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
        }
    },
}
