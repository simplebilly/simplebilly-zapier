const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}csv_content`,
                label: `[${labelPrefix}csv_content]`,
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
            'csv_content': bundle.inputData?.[`${keyPrefix}csv_content`],
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
        }
    },
}
