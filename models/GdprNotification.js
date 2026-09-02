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
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isRead`,
                label: `[${labelPrefix}isRead]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'isRead': bundle.inputData?.[`${keyPrefix}isRead`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
        }
    },
}
