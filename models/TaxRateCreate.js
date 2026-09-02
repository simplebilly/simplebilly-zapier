const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}countryCode`,
                label: `ISO 3166-1 alpha-2 country code. - [${labelPrefix}countryCode]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}effectiveFrom`,
                label: `Date this rate took effect; `None` = not date-bound. - [${labelPrefix}effectiveFrom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isDefault`,
                label: `Default rate for the country (one per country); fallback for lookups when no dated rate applies. - [${labelPrefix}isDefault]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `Human name, e.g. \"VAT\". - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ratePercent`,
                label: `Rate in hundredths of a percent: 1900 = 19.00%. - [${labelPrefix}ratePercent]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'countryCode': bundle.inputData?.[`${keyPrefix}countryCode`],
            'effectiveFrom': bundle.inputData?.[`${keyPrefix}effectiveFrom`],
            'isDefault': bundle.inputData?.[`${keyPrefix}isDefault`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'ratePercent': bundle.inputData?.[`${keyPrefix}ratePercent`],
        }
    },
}
