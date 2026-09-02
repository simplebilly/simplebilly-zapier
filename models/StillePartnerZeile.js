const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}auseinandersetzungsguthaben`,
                label: `[${labelPrefix}auseinandersetzungsguthaben]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewinnanteil`,
                label: `[${labelPrefix}gewinnanteil]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewinnvortrag`,
                label: `[${labelPrefix}gewinnvortrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hinweis`,
                label: `[${labelPrefix}hinweis]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instrument_type`,
                label: `[${labelPrefix}instrument_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kest`,
                label: `[${labelPrefix}kest]`,
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
                key: `${keyPrefix}verlust_verrechnungskonto`,
                label: `[${labelPrefix}verlust_verrechnungskonto]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}verlustanteil`,
                label: `[${labelPrefix}verlustanteil]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'auseinandersetzungsguthaben': bundle.inputData?.[`${keyPrefix}auseinandersetzungsguthaben`],
            'gewinnanteil': bundle.inputData?.[`${keyPrefix}gewinnanteil`],
            'gewinnvortrag': bundle.inputData?.[`${keyPrefix}gewinnvortrag`],
            'hinweis': bundle.inputData?.[`${keyPrefix}hinweis`],
            'instrument_type': bundle.inputData?.[`${keyPrefix}instrument_type`],
            'kest': bundle.inputData?.[`${keyPrefix}kest`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'verlust_verrechnungskonto': bundle.inputData?.[`${keyPrefix}verlust_verrechnungskonto`],
            'verlustanteil': bundle.inputData?.[`${keyPrefix}verlustanteil`],
        }
    },
}
