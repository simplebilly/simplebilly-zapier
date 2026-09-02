const utils = require('../utils/utils');
const PluginPricing_oneOf = require('../models/PluginPricing_oneOf');
const PluginPricing_oneOf_1 = require('../models/PluginPricing_oneOf_1');
const PluginPricing_oneOf_2 = require('../models/PluginPricing_oneOf_2');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
                choices: [
                    'free',
                    'one_time',
                    'recurring',
                ],
            },
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}price_per_month`,
                label: `[${labelPrefix}price_per_month]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'price_per_month': bundle.inputData?.[`${keyPrefix}price_per_month`],
        }
    },
}
