const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}price_per_month`,
                label: `[${labelPrefix}price_per_month]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
                choices: [
                    'recurring',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'price_per_month': bundle.inputData?.[`${keyPrefix}price_per_month`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
