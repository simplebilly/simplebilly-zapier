const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}delivered_at`,
                label: `[${labelPrefix}delivered_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signed_by`,
                label: `[${labelPrefix}signed_by]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tracking_number`,
                label: `[${labelPrefix}tracking_number]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'delivered_at': bundle.inputData?.[`${keyPrefix}delivered_at`],
            'signed_by': bundle.inputData?.[`${keyPrefix}signed_by`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tracking_number': bundle.inputData?.[`${keyPrefix}tracking_number`],
        }
    },
}
