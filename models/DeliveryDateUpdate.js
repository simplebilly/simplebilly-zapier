const utils = require('../utils/utils');
const DeliveryDateStatus = require('../models/DeliveryDateStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fulfilledDate`,
                label: `Date actually delivered (set on fulfillment). - [${labelPrefix}fulfilledDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}note`,
                label: `[${labelPrefix}note]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `Sales order number (`order.order_number`). - [${labelPrefix}orderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originalDate`,
                label: `Original date promised before rescheduling. - [${labelPrefix}originalDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `Product line item this date applies to, if per-item. References the product entity. - [${labelPrefix}productId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}promisedDate`,
                label: `Date promised to the customer. - [${labelPrefix}promisedDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...DeliveryDateStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'fulfilledDate': bundle.inputData?.[`${keyPrefix}fulfilledDate`],
            'note': bundle.inputData?.[`${keyPrefix}note`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'originalDate': bundle.inputData?.[`${keyPrefix}originalDate`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'promisedDate': bundle.inputData?.[`${keyPrefix}promisedDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
