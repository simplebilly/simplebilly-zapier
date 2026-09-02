const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currentPeriodEnd`,
                label: `[${labelPrefix}currentPeriodEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentPeriodStart`,
                label: `[${labelPrefix}currentPeriodStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}plan`,
                label: `[${labelPrefix}plan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currentPeriodEnd': bundle.inputData?.[`${keyPrefix}currentPeriodEnd`],
            'currentPeriodStart': bundle.inputData?.[`${keyPrefix}currentPeriodStart`],
            'plan': bundle.inputData?.[`${keyPrefix}plan`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
