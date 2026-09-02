const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}customer_id`,
                label: `[${labelPrefix}customer_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}delivery_note_printed`,
                label: `[${labelPrefix}delivery_note_printed]`,
                required: true,
                type: 'boolean',
            },
            ....fields(`${keyPrefix}items`, isInput),
            {
                key: `${keyPrefix}items_count`,
                label: `[${labelPrefix}items_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}label_printed`,
                label: `[${labelPrefix}label_printed]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}order_number`,
                label: `[${labelPrefix}order_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}order_status`,
                label: `[${labelPrefix}order_status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipment_id`,
                label: `[${labelPrefix}shipment_id]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}shipping_address`, isInput),
            {
                key: `${keyPrefix}shipping_method`,
                label: `[${labelPrefix}shipping_method]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tracking_number`,
                label: `[${labelPrefix}tracking_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}video_recording`,
                label: `[${labelPrefix}video_recording]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'customer_id': bundle.inputData?.[`${keyPrefix}customer_id`],
            'delivery_note_printed': bundle.inputData?.[`${keyPrefix}delivery_note_printed`],
            'items': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}items`)),
            'items_count': bundle.inputData?.[`${keyPrefix}items_count`],
            'label_printed': bundle.inputData?.[`${keyPrefix}label_printed`],
            'order_number': bundle.inputData?.[`${keyPrefix}order_number`],
            'order_status': bundle.inputData?.[`${keyPrefix}order_status`],
            'shipment_id': bundle.inputData?.[`${keyPrefix}shipment_id`],
            'shipping_address': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}shipping_address`)),
            'shipping_method': bundle.inputData?.[`${keyPrefix}shipping_method`],
            'tracking_number': bundle.inputData?.[`${keyPrefix}tracking_number`],
            'video_recording': bundle.inputData?.[`${keyPrefix}video_recording`],
        }
    },
}
