const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}deliveredAt`,
                label: `[${labelPrefix}deliveredAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}labelUrl`,
                label: `[${labelPrefix}labelUrl]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItemsShipment`, isInput),
            {
                key: `${keyPrefix}orderId`,
                label: `References the order entity. - [${labelPrefix}orderId]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}recipientAddress`, isInput),
            {
                key: `${keyPrefix}shipmentDate`,
                label: `[${labelPrefix}shipmentDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCarrier`,
                label: `[${labelPrefix}shippingCarrier]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCost`,
                label: `[${labelPrefix}shippingCost]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingMethod`,
                label: `[${labelPrefix}shippingMethod]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedBy`,
                label: `[${labelPrefix}signedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}trackingEvents`, isInput),
            {
                key: `${keyPrefix}trackingNumber`,
                label: `[${labelPrefix}trackingNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trackingUrl`,
                label: `[${labelPrefix}trackingUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weightKg`,
                label: `[${labelPrefix}weightKg]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'deliveredAt': bundle.inputData?.[`${keyPrefix}deliveredAt`],
            'labelUrl': bundle.inputData?.[`${keyPrefix}labelUrl`],
            'lineItemsShipment': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItemsShipment`)),
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'recipientAddress': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}recipientAddress`)),
            'shipmentDate': bundle.inputData?.[`${keyPrefix}shipmentDate`],
            'shippingCarrier': bundle.inputData?.[`${keyPrefix}shippingCarrier`],
            'shippingCost': bundle.inputData?.[`${keyPrefix}shippingCost`],
            'shippingMethod': bundle.inputData?.[`${keyPrefix}shippingMethod`],
            'signedBy': bundle.inputData?.[`${keyPrefix}signedBy`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'trackingEvents': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}trackingEvents`)),
            'trackingNumber': bundle.inputData?.[`${keyPrefix}trackingNumber`],
            'trackingUrl': bundle.inputData?.[`${keyPrefix}trackingUrl`],
            'weightKg': bundle.inputData?.[`${keyPrefix}weightKg`],
        }
    },
}
