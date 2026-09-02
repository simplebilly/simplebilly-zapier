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
                key: `${keyPrefix}content_type`,
                label: `[${labelPrefix}content_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}filename`,
                label: `[${labelPrefix}filename]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'content_type': bundle.inputData?.[`${keyPrefix}content_type`],
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
        }
    },
}
