const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CountryCode = require('../models/CountryCode');
const CurrencyCode = require('../models/CurrencyCode');
const DocumentType = require('../models/DocumentType');
const InvoiceStatus = require('../models/InvoiceStatus');
const InvoiceType = require('../models/InvoiceType');
const PaymentStatus = require('../models/PaymentStatus');
const PrecedingSalesVoucherType = require('../models/PrecedingSalesVoucherType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}attachments`, isInput),
            {
                key: `${keyPrefix}billingPeriodEnd`,
                label: `[${labelPrefix}billingPeriodEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}billingPeriodStart`,
                label: `[${labelPrefix}billingPeriodStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cancellationDate`,
                label: `[${labelPrefix}cancellationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cancellationInvoiceId`,
                label: `References the invoice entity. - [${labelPrefix}cancellationInvoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cancellationReason`,
                label: `[${labelPrefix}cancellationReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contractId`,
                label: `References the contract entity. - [${labelPrefix}contractId]`,
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
            {
                key: `${keyPrefix}discountAmount`,
                label: `[${labelPrefix}discountAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountDays`,
                label: `[${labelPrefix}discountDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}discountPercentage`,
                label: `[${labelPrefix}discountPercentage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}documentType`,
                ...DocumentType.fields(`${keyPrefix}documentType`, isInput),
            },
            {
                key: `${keyPrefix}dunningLevel`,
                label: `[${labelPrefix}dunningLevel]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}inputVatAmount`,
                label: `[${labelPrefix}inputVatAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inputVatDeductible`,
                label: `[${labelPrefix}inputVatDeductible]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}inputVatPercentage`,
                label: `[${labelPrefix}inputVatPercentage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}introductionText`,
                label: `[${labelPrefix}introductionText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceType`,
                ...InvoiceType.fields(`${keyPrefix}invoiceType`, isInput),
            },
            {
                key: `${keyPrefix}isCancelled`,
                label: `[${labelPrefix}isCancelled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDraft`,
                label: `[${labelPrefix}isDraft]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isEuAcquisition`,
                label: `[${labelPrefix}isEuAcquisition]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isEuDelivery`,
                label: `[${labelPrefix}isEuDelivery]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIntraCommunityAcquisition`,
                label: `[${labelPrefix}isIntraCommunityAcquisition]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isReverseCharge`,
                label: `[${labelPrefix}isReverseCharge]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}issueDate`,
                label: `[${labelPrefix}issueDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ledgerAccount`,
                label: `[${labelPrefix}ledgerAccount]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}margin25a`,
                label: `[${labelPrefix}margin25a]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}margin25aGross`,
                label: `[${labelPrefix}margin25aGross]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}margin25aPurchasePrice`,
                label: `[${labelPrefix}margin25aPurchasePrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `[${labelPrefix}orderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originalPdfPath`,
                label: `[${labelPrefix}originalPdfPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paidAmount`,
                label: `[${labelPrefix}paidAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentDueDate`,
                label: `[${labelPrefix}paymentDueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentStatus`,
                ...PaymentStatus.fields(`${keyPrefix}paymentStatus`, isInput),
            },
            {
                key: `${keyPrefix}paymentTermsText`,
                label: `[${labelPrefix}paymentTermsText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}precedingSalesVoucherId`,
                label: `References the preceding sales voucher entity. - [${labelPrefix}precedingSalesVoucherId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}precedingSalesVoucherType`,
                ...PrecedingSalesVoucherType.fields(`${keyPrefix}precedingSalesVoucherType`, isInput),
            },
            {
                key: `${keyPrefix}receiptConfirmationAvailable`,
                label: `[${labelPrefix}receiptConfirmationAvailable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}relatedInvoiceId`,
                label: `References the invoice entity. - [${labelPrefix}relatedInvoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}relationshipType`,
                label: `[${labelPrefix}relationshipType]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}senderSnapshot`, isInput),
            {
                key: `${keyPrefix}sentAt`,
                label: `[${labelPrefix}sentAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}servicePeriodEnd`,
                label: `[${labelPrefix}servicePeriodEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}servicePeriodStart`,
                label: `[${labelPrefix}servicePeriodStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...InvoiceStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}subtotal`,
                label: `[${labelPrefix}subtotal]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierId`,
                label: `References the supplier entity. - [${labelPrefix}supplierId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxExemptionReason`,
                label: `[${labelPrefix}taxExemptionReason]`,
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
            {
                key: `${keyPrefix}vatCountry`,
                ...CountryCode.fields(`${keyPrefix}vatCountry`, isInput),
            },
            {
                key: `${keyPrefix}vatSpecialCase`,
                label: `[${labelPrefix}vatSpecialCase]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'attachments': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}attachments`)),
            'billingPeriodEnd': bundle.inputData?.[`${keyPrefix}billingPeriodEnd`],
            'billingPeriodStart': bundle.inputData?.[`${keyPrefix}billingPeriodStart`],
            'cancellationDate': bundle.inputData?.[`${keyPrefix}cancellationDate`],
            'cancellationInvoiceId': bundle.inputData?.[`${keyPrefix}cancellationInvoiceId`],
            'cancellationReason': bundle.inputData?.[`${keyPrefix}cancellationReason`],
            'contractId': bundle.inputData?.[`${keyPrefix}contractId`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'discountAmount': bundle.inputData?.[`${keyPrefix}discountAmount`],
            'discountDays': bundle.inputData?.[`${keyPrefix}discountDays`],
            'discountPercentage': bundle.inputData?.[`${keyPrefix}discountPercentage`],
            'documentType': bundle.inputData?.[`${keyPrefix}documentType`],
            'dunningLevel': bundle.inputData?.[`${keyPrefix}dunningLevel`],
            'inputVatAmount': bundle.inputData?.[`${keyPrefix}inputVatAmount`],
            'inputVatDeductible': bundle.inputData?.[`${keyPrefix}inputVatDeductible`],
            'inputVatPercentage': bundle.inputData?.[`${keyPrefix}inputVatPercentage`],
            'introductionText': bundle.inputData?.[`${keyPrefix}introductionText`],
            'invoiceType': bundle.inputData?.[`${keyPrefix}invoiceType`],
            'isCancelled': bundle.inputData?.[`${keyPrefix}isCancelled`],
            'isDraft': bundle.inputData?.[`${keyPrefix}isDraft`],
            'isEuAcquisition': bundle.inputData?.[`${keyPrefix}isEuAcquisition`],
            'isEuDelivery': bundle.inputData?.[`${keyPrefix}isEuDelivery`],
            'isIntraCommunityAcquisition': bundle.inputData?.[`${keyPrefix}isIntraCommunityAcquisition`],
            'isReverseCharge': bundle.inputData?.[`${keyPrefix}isReverseCharge`],
            'issueDate': bundle.inputData?.[`${keyPrefix}issueDate`],
            'ledgerAccount': bundle.inputData?.[`${keyPrefix}ledgerAccount`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'margin25a': bundle.inputData?.[`${keyPrefix}margin25a`],
            'margin25aGross': bundle.inputData?.[`${keyPrefix}margin25aGross`],
            'margin25aPurchasePrice': bundle.inputData?.[`${keyPrefix}margin25aPurchasePrice`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'originalPdfPath': bundle.inputData?.[`${keyPrefix}originalPdfPath`],
            'paidAmount': bundle.inputData?.[`${keyPrefix}paidAmount`],
            'paymentDueDate': bundle.inputData?.[`${keyPrefix}paymentDueDate`],
            'paymentStatus': bundle.inputData?.[`${keyPrefix}paymentStatus`],
            'paymentTermsText': bundle.inputData?.[`${keyPrefix}paymentTermsText`],
            'precedingSalesVoucherId': bundle.inputData?.[`${keyPrefix}precedingSalesVoucherId`],
            'precedingSalesVoucherType': bundle.inputData?.[`${keyPrefix}precedingSalesVoucherType`],
            'receiptConfirmationAvailable': bundle.inputData?.[`${keyPrefix}receiptConfirmationAvailable`],
            'relatedInvoiceId': bundle.inputData?.[`${keyPrefix}relatedInvoiceId`],
            'relationshipType': bundle.inputData?.[`${keyPrefix}relationshipType`],
            'senderSnapshot': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}senderSnapshot`)),
            'sentAt': bundle.inputData?.[`${keyPrefix}sentAt`],
            'servicePeriodEnd': bundle.inputData?.[`${keyPrefix}servicePeriodEnd`],
            'servicePeriodStart': bundle.inputData?.[`${keyPrefix}servicePeriodStart`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subtotal': bundle.inputData?.[`${keyPrefix}subtotal`],
            'supplierId': bundle.inputData?.[`${keyPrefix}supplierId`],
            'taxExemptionReason': bundle.inputData?.[`${keyPrefix}taxExemptionReason`],
            'totalAmount': bundle.inputData?.[`${keyPrefix}totalAmount`],
            'totalTax': bundle.inputData?.[`${keyPrefix}totalTax`],
            'vatCountry': bundle.inputData?.[`${keyPrefix}vatCountry`],
            'vatSpecialCase': bundle.inputData?.[`${keyPrefix}vatSpecialCase`],
        }
    },
}
