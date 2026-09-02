const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}booking_count`,
                label: `[${labelPrefix}booking_count]`,
                required: true,
                type: 'integer',
            },
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
            'booking_count': bundle.inputData?.[`${keyPrefix}booking_count`],
            'csv_content': bundle.inputData?.[`${keyPrefix}csv_content`],
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
        }
    },
}
