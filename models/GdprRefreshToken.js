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
                key: `${keyPrefix}expiresAt`,
                label: `[${labelPrefix}expiresAt]`,
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
                key: `${keyPrefix}revokedAt`,
                label: `[${labelPrefix}revokedAt]`,
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
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'expiresAt': bundle.inputData?.[`${keyPrefix}expiresAt`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'revokedAt': bundle.inputData?.[`${keyPrefix}revokedAt`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
