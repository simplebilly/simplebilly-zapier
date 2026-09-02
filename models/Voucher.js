const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const PaymentStatus = require('../models/PaymentStatus');
const VoucherStatus = require('../models/VoucherStatus');
const VoucherType = require('../models/VoucherType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}categoryId`,
                label: `[${labelPrefix}categoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `References the contact entity. - [${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}fileAttachments`, isInput),
            ....fields(`${keyPrefix}lineItems`, isInput),
            ....fields(`${keyPrefix}metadata`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}openAmount`,
                label: `[${labelPrefix}openAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paidDate`,
                label: `[${labelPrefix}paidDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentStatus`,
                ...PaymentStatus.fields(`${keyPrefix}paymentStatus`, isInput),
            },
            ....fields(`${keyPrefix}taxAmounts`, isInput),
            {
                key: `${keyPrefix}taxCondition`,
                label: `[${labelPrefix}taxCondition]`,
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
            {
                key: `${keyPrefix}voucherDate`,
                label: `[${labelPrefix}voucherDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucherNumber`,
                label: `[${labelPrefix}voucherNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucherStatus`,
                ...VoucherStatus.fields(`${keyPrefix}voucherStatus`, isInput),
            },
            {
                key: `${keyPrefix}voucherType`,
                ...VoucherType.fields(`${keyPrefix}voucherType`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'categoryId': bundle.inputData?.[`${keyPrefix}categoryId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'fileAttachments': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}fileAttachments`)),
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'metadata': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}metadata`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'openAmount': bundle.inputData?.[`${keyPrefix}openAmount`],
            'paidDate': bundle.inputData?.[`${keyPrefix}paidDate`],
            'paymentStatus': bundle.inputData?.[`${keyPrefix}paymentStatus`],
            'taxAmounts': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}taxAmounts`)),
            'taxCondition': bundle.inputData?.[`${keyPrefix}taxCondition`],
            'totalGrossAmount': bundle.inputData?.[`${keyPrefix}totalGrossAmount`],
            'totalNetAmount': bundle.inputData?.[`${keyPrefix}totalNetAmount`],
            'voucherDate': bundle.inputData?.[`${keyPrefix}voucherDate`],
            'voucherNumber': bundle.inputData?.[`${keyPrefix}voucherNumber`],
            'voucherStatus': bundle.inputData?.[`${keyPrefix}voucherStatus`],
            'voucherType': bundle.inputData?.[`${keyPrefix}voucherType`],
        }
    },
}
