const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}order_number`,
                label: `[${labelPrefix}order_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipment_id`,
                label: `[${labelPrefix}shipment_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}video_url`,
                label: `[${labelPrefix}video_url]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'order_number': bundle.inputData?.[`${keyPrefix}order_number`],
            'shipment_id': bundle.inputData?.[`${keyPrefix}shipment_id`],
            'video_url': bundle.inputData?.[`${keyPrefix}video_url`],
        }
    },
}
