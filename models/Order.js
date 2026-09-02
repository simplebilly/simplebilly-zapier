const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const LanguageCode = require('../models/LanguageCode');
const OrderStatus = require('../models/OrderStatus');
const PaymentMethod = require('../models/PaymentMethod');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}auditLog`, isInput),
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}invoiceAddress`, isInput),
            ....fields(`${keyPrefix}items`, isInput),
            {
                key: `${keyPrefix}language`,
                ...LanguageCode.fields(`${keyPrefix}language`, isInput),
            },
            {
                key: `${keyPrefix}orderStatus`,
                ...OrderStatus.fields(`${keyPrefix}orderStatus`, isInput),
            },
            {
                key: `${keyPrefix}paymentMethod`,
                ...PaymentMethod.fields(`${keyPrefix}paymentMethod`, isInput),
            },
            ....fields(`${keyPrefix}shippingAddress`, isInput),
            {
                key: `${keyPrefix}shippingCost`,
                label: `[${labelPrefix}shippingCost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingMethod`,
                label: `[${labelPrefix}shippingMethod]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingWeight`,
                label: `[${labelPrefix}shippingWeight]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tags`,
                label: `[${labelPrefix}tags]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalCost`,
                label: `[${labelPrefix}totalCost]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'auditLog': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}auditLog`)),
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
            'invoiceAddress': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}invoiceAddress`)),
            'items': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}items`)),
            'language': bundle.inputData?.[`${keyPrefix}language`],
            'orderStatus': bundle.inputData?.[`${keyPrefix}orderStatus`],
            'paymentMethod': bundle.inputData?.[`${keyPrefix}paymentMethod`],
            'shippingAddress': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}shippingAddress`)),
            'shippingCost': bundle.inputData?.[`${keyPrefix}shippingCost`],
            'shippingMethod': bundle.inputData?.[`${keyPrefix}shippingMethod`],
            'shippingWeight': bundle.inputData?.[`${keyPrefix}shippingWeight`],
            'tags': bundle.inputData?.[`${keyPrefix}tags`],
            'totalCost': bundle.inputData?.[`${keyPrefix}totalCost`],
        }
    },
}
