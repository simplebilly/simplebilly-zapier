const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}ageDays`,
                label: `Days since creation, oldest first. - [${labelPrefix}ageDays]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerName`,
                label: `[${labelPrefix}customerName]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
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
                key: `${keyPrefix}returnOrderId`,
                label: `[${labelPrefix}returnOrderId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'ageDays': bundle.inputData?.[`${keyPrefix}ageDays`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'customerName': bundle.inputData?.[`${keyPrefix}customerName`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'returnNumber': bundle.inputData?.[`${keyPrefix}returnNumber`],
            'returnOrderId': bundle.inputData?.[`${keyPrefix}returnOrderId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
