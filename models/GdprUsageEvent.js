const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}eventType`,
                label: `[${labelPrefix}eventType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'integer',
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
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'eventType': bundle.inputData?.[`${keyPrefix}eventType`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
