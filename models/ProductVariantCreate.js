const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}barcode`,
                label: `[${labelPrefix}barcode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageLink`,
                label: `[${labelPrefix}imageLink]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Human-readable variant label, e.g. \"Red / M\". - [${labelPrefix}name]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}optionValues`, isInput),
            {
                key: `${keyPrefix}price`,
                label: `Explicit override price for this variant (takes precedence over parent price + delta). - [${labelPrefix}price]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceDelta`,
                label: `Price adjustment relative to the parent product's `default_price`. - [${labelPrefix}priceDelta]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `The parent product this variant belongs to. References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sku`,
                label: `Variant-specific SKU (must be unique per tenant). - [${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stockQuantity`,
                label: `Variant-level stock (optional — may be tracked on the parent only). - [${labelPrefix}stockQuantity]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'barcode': bundle.inputData?.[`${keyPrefix}barcode`],
            'imageLink': bundle.inputData?.[`${keyPrefix}imageLink`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'optionValues': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}optionValues`)),
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'priceDelta': bundle.inputData?.[`${keyPrefix}priceDelta`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'stockQuantity': bundle.inputData?.[`${keyPrefix}stockQuantity`],
        }
    },
}
