const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}connectors`,
                label: `[${labelPrefix}connectors]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}invoicesThisMonth`,
                label: `[${labelPrefix}invoicesThisMonth]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}overageSeats`,
                label: `[${labelPrefix}overageSeats]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}users`,
                label: `[${labelPrefix}users]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'connectors': bundle.inputData?.[`${keyPrefix}connectors`],
            'invoicesThisMonth': bundle.inputData?.[`${keyPrefix}invoicesThisMonth`],
            'overageSeats': bundle.inputData?.[`${keyPrefix}overageSeats`],
            'users': bundle.inputData?.[`${keyPrefix}users`],
        }
    },
}
