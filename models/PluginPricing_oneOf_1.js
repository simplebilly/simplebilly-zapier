const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
                choices: [
                    'one_time',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
