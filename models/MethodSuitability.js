const utils = require('../utils/utils');
const ShippingRate = require('../models/ShippingRate');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}carrier`,
                label: `[${labelPrefix}carrier]`,
                required: true,
                type: 'string',
            },
            ...ShippingRate.fields(`${keyPrefix}rate`, isInput),
            {
                key: `${keyPrefix}reasons`,
                label: `[${labelPrefix}reasons]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}service`,
                label: `[${labelPrefix}service]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}suitable`,
                label: `[${labelPrefix}suitable]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'rate': utils.removeIfEmpty(ShippingRate.mapping(bundle, `${keyPrefix}rate`)),
            'reasons': bundle.inputData?.[`${keyPrefix}reasons`],
            'service': bundle.inputData?.[`${keyPrefix}service`],
            'suitable': bundle.inputData?.[`${keyPrefix}suitable`],
        }
    },
}
