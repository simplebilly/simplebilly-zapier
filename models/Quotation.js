const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const PrecedingSalesVoucherType = require('../models/PrecedingSalesVoucherType');
const VoucherStatus = require('../models/VoucherStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}address`, isInput),
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
                key: `${keyPrefix}expirationDate`,
                label: `[${labelPrefix}expirationDate]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}files`, isInput),
            {
                key: `${keyPrefix}introduction`,
                label: `[${labelPrefix}introduction]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
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
                key: `${keyPrefix}quotationNumber`,
                label: `[${labelPrefix}quotationNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remark`,
                label: `[${labelPrefix}remark]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subtotal`,
                label: `[${labelPrefix}subtotal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxCondition`,
                label: `[${labelPrefix}taxCondition]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalAmount`,
                label: `[${labelPrefix}totalAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalTax`,
                label: `[${labelPrefix}totalTax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucherDate`,
                label: `[${labelPrefix}voucherDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}voucherStatus`,
                ...VoucherStatus.fields(`${keyPrefix}voucherStatus`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}address`)),
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'expirationDate': bundle.inputData?.[`${keyPrefix}expirationDate`],
            'files': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}files`)),
            'introduction': bundle.inputData?.[`${keyPrefix}introduction`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'precedingSalesVoucherId': bundle.inputData?.[`${keyPrefix}precedingSalesVoucherId`],
            'precedingSalesVoucherType': bundle.inputData?.[`${keyPrefix}precedingSalesVoucherType`],
            'quotationNumber': bundle.inputData?.[`${keyPrefix}quotationNumber`],
            'remark': bundle.inputData?.[`${keyPrefix}remark`],
            'subtotal': bundle.inputData?.[`${keyPrefix}subtotal`],
            'taxCondition': bundle.inputData?.[`${keyPrefix}taxCondition`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'totalAmount': bundle.inputData?.[`${keyPrefix}totalAmount`],
            'totalTax': bundle.inputData?.[`${keyPrefix}totalTax`],
            'voucherDate': bundle.inputData?.[`${keyPrefix}voucherDate`],
            'voucherStatus': bundle.inputData?.[`${keyPrefix}voucherStatus`],
        }
    },
}
