const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}freibetrag`,
                label: `[${labelPrefix}freibetrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gesamtbelastung`,
                label: `[${labelPrefix}gesamtbelastung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewerbeertrag`,
                label: `[${labelPrefix}gewerbeertrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hebesatz`,
                label: `[${labelPrefix}hebesatz]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}koerperschaftsteuer`,
                label: `[${labelPrefix}koerperschaftsteuer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}land`,
                label: `[${labelPrefix}land]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}messbetrag`,
                label: `[${labelPrefix}messbetrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}steuer`,
                label: `[${labelPrefix}steuer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}steuer_art`,
                label: `[${labelPrefix}steuer_art]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'freibetrag': bundle.inputData?.[`${keyPrefix}freibetrag`],
            'gesamtbelastung': bundle.inputData?.[`${keyPrefix}gesamtbelastung`],
            'gewerbeertrag': bundle.inputData?.[`${keyPrefix}gewerbeertrag`],
            'hebesatz': bundle.inputData?.[`${keyPrefix}hebesatz`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'koerperschaftsteuer': bundle.inputData?.[`${keyPrefix}koerperschaftsteuer`],
            'land': bundle.inputData?.[`${keyPrefix}land`],
            'messbetrag': bundle.inputData?.[`${keyPrefix}messbetrag`],
            'steuer': bundle.inputData?.[`${keyPrefix}steuer`],
            'steuer_art': bundle.inputData?.[`${keyPrefix}steuer_art`],
        }
    },
}
