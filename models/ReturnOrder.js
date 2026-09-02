const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const ReturnOrderStatus = require('../models/ReturnOrderStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}customerContactId`,
                label: `References the contact entity. - [${labelPrefix}customerContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerName`,
                label: `[${labelPrefix}customerName]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `References the order entity. - [${labelPrefix}orderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `[${labelPrefix}orderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}returnNumber`,
                label: `[${labelPrefix}returnNumber]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}returnReason`,
                label: `[${labelPrefix}returnReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ReturnOrderStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `Warehouse into which restockable items are returned. References the warehouse entity. - [${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customerContactId': bundle.inputData?.[`${keyPrefix}customerContactId`],
            'customerName': bundle.inputData?.[`${keyPrefix}customerName`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'returnNumber': bundle.inputData?.[`${keyPrefix}returnNumber`],
            'returnReason': bundle.inputData?.[`${keyPrefix}returnReason`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
