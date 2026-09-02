const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bezeichnung`,
                label: `[${labelPrefix}bezeichnung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}faellig`,
                label: `[${labelPrefix}faellig]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}faellig_original`,
                label: `[${labelPrefix}faellig_original]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hinweis`,
                label: `[${labelPrefix}hinweis]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}typ`,
                label: `[${labelPrefix}typ]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeitraum`,
                label: `[${labelPrefix}zeitraum]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bezeichnung': bundle.inputData?.[`${keyPrefix}bezeichnung`],
            'faellig': bundle.inputData?.[`${keyPrefix}faellig`],
            'faellig_original': bundle.inputData?.[`${keyPrefix}faellig_original`],
            'hinweis': bundle.inputData?.[`${keyPrefix}hinweis`],
            'typ': bundle.inputData?.[`${keyPrefix}typ`],
            'zeitraum': bundle.inputData?.[`${keyPrefix}zeitraum`],
        }
    },
}
