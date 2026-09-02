const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CountryCode = require('../models/CountryCode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}addressCity`,
                label: `[${labelPrefix}addressCity]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressCountry`,
                ...CountryCode.fields(`${keyPrefix}addressCountry`, isInput),
            },
            {
                key: `${keyPrefix}addressStreet`,
                label: `[${labelPrefix}addressStreet]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressZip`,
                label: `[${labelPrefix}addressZip]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}binLocations`, isInput),
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDefault`,
                label: `[${labelPrefix}isDefault]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'addressCity': bundle.inputData?.[`${keyPrefix}addressCity`],
            'addressCountry': bundle.inputData?.[`${keyPrefix}addressCountry`],
            'addressStreet': bundle.inputData?.[`${keyPrefix}addressStreet`],
            'addressZip': bundle.inputData?.[`${keyPrefix}addressZip`],
            'binLocations': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}binLocations`)),
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'isDefault': bundle.inputData?.[`${keyPrefix}isDefault`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
        }
    },
}
