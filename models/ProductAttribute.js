const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isFilterable`,
                label: `Whether this attribute participates in the shop's faceted filters. - [${labelPrefix}isFilterable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Attribute name, e.g. `Material`, `Farbe`, `Gewicht`. - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}position`,
                label: `Ordering position within the product's attribute list. - [${labelPrefix}position]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}productId`,
                label: `The product this attribute belongs to. References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}unit`,
                label: `Optional unit of measure for numeric attributes, e.g. `g`, `cm`. - [${labelPrefix}unit]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `Attribute value, e.g. `Baumwolle`, `Rot`, `180g`. - [${labelPrefix}value]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isFilterable': bundle.inputData?.[`${keyPrefix}isFilterable`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'position': bundle.inputData?.[`${keyPrefix}position`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
        }
    },
}
