const utils = require('../utils/utils');
const CountryCode = require('../models/CountryCode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}carrier`,
                label: `Provider that auto-filled this rule (e.g. \"ups\"), if any. - [${labelPrefix}carrier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                ...CountryCode.fields(`${keyPrefix}country`, isInput),
            },
            {
                key: `${keyPrefix}deliveryTime`,
                label: `Delivery time text, e.g. \"1-3\". - [${labelPrefix}deliveryTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}maxWeightKg`,
                label: `[${labelPrefix}maxWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}minWeightKg`,
                label: `[${labelPrefix}minWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}name`,
                label: `Delivery-method label, e.g. \"Standardversand\". - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}price`,
                label: `Shipping cost in the shop's currency. - [${labelPrefix}price]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}priority`,
                label: `Lower wins when multiple rules match. - [${labelPrefix}priority]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'country': bundle.inputData?.[`${keyPrefix}country`],
            'deliveryTime': bundle.inputData?.[`${keyPrefix}deliveryTime`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'maxWeightKg': bundle.inputData?.[`${keyPrefix}maxWeightKg`],
            'minWeightKg': bundle.inputData?.[`${keyPrefix}minWeightKg`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
        }
    },
}
