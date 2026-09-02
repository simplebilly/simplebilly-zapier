const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}lineCost`,
                label: `total_quantity × unit_purchase_price (0 when price unknown). - [${labelPrefix}lineCost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantityPerUnit`,
                label: `Component quantity required per finished unit. - [${labelPrefix}quantityPerUnit]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalQuantity`,
                label: `Total component quantity consumed by this order. - [${labelPrefix}totalQuantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}unitPurchasePrice`,
                label: `[${labelPrefix}unitPurchasePrice]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'lineCost': bundle.inputData?.[`${keyPrefix}lineCost`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'quantityPerUnit': bundle.inputData?.[`${keyPrefix}quantityPerUnit`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'totalQuantity': bundle.inputData?.[`${keyPrefix}totalQuantity`],
            'unitPurchasePrice': bundle.inputData?.[`${keyPrefix}unitPurchasePrice`],
        }
    },
}
