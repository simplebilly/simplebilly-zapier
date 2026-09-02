const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}channel_id`,
                label: `[${labelPrefix}channel_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}channel_type`,
                label: `[${labelPrefix}channel_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customer_email`,
                label: `[${labelPrefix}customer_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customer_id`,
                label: `[${labelPrefix}customer_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customer_name`,
                label: `[${labelPrefix}customer_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}external_id`,
                label: `[${labelPrefix}external_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message_body`,
                label: `[${labelPrefix}message_body]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}order_ref`,
                label: `[${labelPrefix}order_ref]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'channel_id': bundle.inputData?.[`${keyPrefix}channel_id`],
            'channel_type': bundle.inputData?.[`${keyPrefix}channel_type`],
            'customer_email': bundle.inputData?.[`${keyPrefix}customer_email`],
            'customer_id': bundle.inputData?.[`${keyPrefix}customer_id`],
            'customer_name': bundle.inputData?.[`${keyPrefix}customer_name`],
            'external_id': bundle.inputData?.[`${keyPrefix}external_id`],
            'message_body': bundle.inputData?.[`${keyPrefix}message_body`],
            'order_ref': bundle.inputData?.[`${keyPrefix}order_ref`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
        }
    },
}
