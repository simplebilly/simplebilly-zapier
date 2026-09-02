const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const PurchaseOrderStatus = require('../models/PurchaseOrderStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}deliveryAddress`, isInput),
            {
                key: `${keyPrefix}expectedDeliveryDate`,
                label: `[${labelPrefix}expectedDeliveryDate]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderDate`,
                label: `[${labelPrefix}orderDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}poNumber`,
                label: `[${labelPrefix}poNumber]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...PurchaseOrderStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}supplierContactId`,
                label: `References the supplier entity. - [${labelPrefix}supplierContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierName`,
                label: `[${labelPrefix}supplierName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalGrossAmount`,
                label: `[${labelPrefix}totalGrossAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalNetAmount`,
                label: `[${labelPrefix}totalNetAmount]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'deliveryAddress': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}deliveryAddress`)),
            'expectedDeliveryDate': bundle.inputData?.[`${keyPrefix}expectedDeliveryDate`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderDate': bundle.inputData?.[`${keyPrefix}orderDate`],
            'poNumber': bundle.inputData?.[`${keyPrefix}poNumber`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'supplierContactId': bundle.inputData?.[`${keyPrefix}supplierContactId`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'totalGrossAmount': bundle.inputData?.[`${keyPrefix}totalGrossAmount`],
            'totalNetAmount': bundle.inputData?.[`${keyPrefix}totalNetAmount`],
        }
    },
}
