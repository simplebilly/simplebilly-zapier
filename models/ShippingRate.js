const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}breakdown`,
                label: `[${labelPrefix}breakdown]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}carrier`,
                label: `[${labelPrefix}carrier]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}cross_border_surcharge`,
                label: `[${labelPrefix}cross_border_surcharge]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destination_country`,
                label: `ISO-2 code of destination country. - [${labelPrefix}destination_country]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}estimated_days`,
                label: `[${labelPrefix}estimated_days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}from_api`,
                label: `True when the rate was obtained via an API call rather than calculation. - [${labelPrefix}from_api]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}insured_value`,
                label: `[${labelPrefix}insured_value]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}island_surcharge`,
                label: `[${labelPrefix}island_surcharge]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}origin_country`,
                label: `ISO-2 code of origin country. - [${labelPrefix}origin_country]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}rate`,
                label: `[${labelPrefix}rate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}service`,
                label: `[${labelPrefix}service]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}volume_discount`,
                label: `[${labelPrefix}volume_discount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weight_kg`,
                label: `[${labelPrefix}weight_kg]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'breakdown': bundle.inputData?.[`${keyPrefix}breakdown`],
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'cross_border_surcharge': bundle.inputData?.[`${keyPrefix}cross_border_surcharge`],
            'destination_country': bundle.inputData?.[`${keyPrefix}destination_country`],
            'estimated_days': bundle.inputData?.[`${keyPrefix}estimated_days`],
            'from_api': bundle.inputData?.[`${keyPrefix}from_api`],
            'insured_value': bundle.inputData?.[`${keyPrefix}insured_value`],
            'island_surcharge': bundle.inputData?.[`${keyPrefix}island_surcharge`],
            'origin_country': bundle.inputData?.[`${keyPrefix}origin_country`],
            'rate': bundle.inputData?.[`${keyPrefix}rate`],
            'service': bundle.inputData?.[`${keyPrefix}service`],
            'volume_discount': bundle.inputData?.[`${keyPrefix}volume_discount`],
            'weight_kg': bundle.inputData?.[`${keyPrefix}weight_kg`],
        }
    },
}
