const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const ProductionOrderStatus = require('../models/ProductionOrderStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bomId`,
                label: `References the BOM entity. - [${labelPrefix}bomId]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}components`, isInput),
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `The finished product to manufacture. References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `Quantity of finished product to produce. - [${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}sourceWarehouseId`,
                label: `Warehouse components are consumed from. References the warehouse entity. - [${labelPrefix}sourceWarehouseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ProductionOrderStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}targetWarehouseId`,
                label: `Warehouse the finished product is added to. References the warehouse entity. - [${labelPrefix}targetWarehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bomId': bundle.inputData?.[`${keyPrefix}bomId`],
            'components': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}components`)),
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'sourceWarehouseId': bundle.inputData?.[`${keyPrefix}sourceWarehouseId`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'targetWarehouseId': bundle.inputData?.[`${keyPrefix}targetWarehouseId`],
        }
    },
}
