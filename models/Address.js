const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}city`,
                label: `[${labelPrefix}city]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}company`,
                label: `[${labelPrefix}company]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                label: `ISO 3166-1 alpha-2 country code (e.g. \"DE\", \"PL\", \"FR\"). - [${labelPrefix}country]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}street`,
                label: `[${labelPrefix}street]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}street_number`,
                label: `[${labelPrefix}street_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zip`,
                label: `[${labelPrefix}zip]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'city': bundle.inputData?.[`${keyPrefix}city`],
            'company': bundle.inputData?.[`${keyPrefix}company`],
            'country': bundle.inputData?.[`${keyPrefix}country`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'street': bundle.inputData?.[`${keyPrefix}street`],
            'street_number': bundle.inputData?.[`${keyPrefix}street_number`],
            'zip': bundle.inputData?.[`${keyPrefix}zip`],
        }
    },
}
