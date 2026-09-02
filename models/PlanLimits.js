const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}maxConnectors`,
                label: `[${labelPrefix}maxConnectors]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxInvoicesPerMonth`,
                label: `[${labelPrefix}maxInvoicesPerMonth]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}maxUsers`,
                label: `[${labelPrefix}maxUsers]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}metered`,
                label: `[${labelPrefix}metered]`,
                dict: true,
            },
            {
                key: `${keyPrefix}paidConnectors`,
                label: `Connectors that are *not* included in this plan (require a higher tier). Empty = all connectors included on this plan. - [${labelPrefix}paidConnectors]`,
                required: true,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'maxConnectors': bundle.inputData?.[`${keyPrefix}maxConnectors`],
            'maxInvoicesPerMonth': bundle.inputData?.[`${keyPrefix}maxInvoicesPerMonth`],
            'maxUsers': bundle.inputData?.[`${keyPrefix}maxUsers`],
            'metered': bundle.inputData?.[`${keyPrefix}metered`],
            'paidConnectors': bundle.inputData?.[`${keyPrefix}paidConnectors`],
        }
    },
}
