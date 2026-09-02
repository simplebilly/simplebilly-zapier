const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const SupplierInvoiceStatus = require('../models/SupplierInvoiceStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}goodsReceiptId`,
                label: `References the goods receipt entity. - [${labelPrefix}goodsReceiptId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceDate`,
                label: `[${labelPrefix}invoiceDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceNumber`,
                label: `[${labelPrefix}invoiceNumber]`,
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
                key: `${keyPrefix}status`,
                ...SupplierInvoiceStatus.fields(`${keyPrefix}status`, isInput),
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
            'goodsReceiptId': bundle.inputData?.[`${keyPrefix}goodsReceiptId`],
            'invoiceDate': bundle.inputData?.[`${keyPrefix}invoiceDate`],
            'invoiceNumber': bundle.inputData?.[`${keyPrefix}invoiceNumber`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'purchaseOrderId': bundle.inputData?.[`${keyPrefix}purchaseOrderId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'supplierContactId': bundle.inputData?.[`${keyPrefix}supplierContactId`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'totalGrossAmount': bundle.inputData?.[`${keyPrefix}totalGrossAmount`],
            'totalNetAmount': bundle.inputData?.[`${keyPrefix}totalNetAmount`],
        }
    },
}
