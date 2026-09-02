const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CurrencyCode = require('../models/CurrencyCode');
const ProformaInvoiceStatus = require('../models/ProformaInvoiceStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}convertedAt`,
                label: `[${labelPrefix}convertedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}convertedToInvoiceId`,
                label: `Set when the proforma was converted into a real invoice. References the invoice entity. - [${labelPrefix}convertedToInvoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currency`,
                ...CurrencyCode.fields(`${keyPrefix}currency`, isInput),
            },
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}customerSnapshot`, isInput),
            {
                key: `${keyPrefix}issueDate`,
                label: `[${labelPrefix}issueDate]`,
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
                key: `${keyPrefix}orderNumber`,
                label: `Reference to the order/quote this proforma belongs to. - [${labelPrefix}orderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentDueDate`,
                label: `Optional deadline the real invoice should carry after conversion. - [${labelPrefix}paymentDueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quotationId`,
                label: `References the quotation entity. - [${labelPrefix}quotationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ProformaInvoiceStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}subtotal`,
                label: `[${labelPrefix}subtotal]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalAmount`,
                label: `[${labelPrefix}totalAmount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalTax`,
                label: `[${labelPrefix}totalTax]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'convertedAt': bundle.inputData?.[`${keyPrefix}convertedAt`],
            'convertedToInvoiceId': bundle.inputData?.[`${keyPrefix}convertedToInvoiceId`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'customerSnapshot': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}customerSnapshot`)),
            'issueDate': bundle.inputData?.[`${keyPrefix}issueDate`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'paymentDueDate': bundle.inputData?.[`${keyPrefix}paymentDueDate`],
            'quotationId': bundle.inputData?.[`${keyPrefix}quotationId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subtotal': bundle.inputData?.[`${keyPrefix}subtotal`],
            'totalAmount': bundle.inputData?.[`${keyPrefix}totalAmount`],
            'totalTax': bundle.inputData?.[`${keyPrefix}totalTax`],
        }
    },
}
