const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}grNumber`,
                label: `[${labelPrefix}grNumber]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseOrderId`,
                label: `References the purchase order entity. - [${labelPrefix}purchaseOrderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiptDate`,
                label: `[${labelPrefix}receiptDate]`,
                required: true,
                type: 'string',
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
                key: `${keyPrefix}warehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}warehouseId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'grNumber': bundle.inputData?.[`${keyPrefix}grNumber`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'purchaseOrderId': bundle.inputData?.[`${keyPrefix}purchaseOrderId`],
            'receiptDate': bundle.inputData?.[`${keyPrefix}receiptDate`],
            'supplierContactId': bundle.inputData?.[`${keyPrefix}supplierContactId`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
