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
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}keyId`,
                label: `[${labelPrefix}keyId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}revoked`,
                label: `[${labelPrefix}revoked]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'expiresAt': bundle.inputData?.[`${keyPrefix}expiresAt`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'keyId': bundle.inputData?.[`${keyPrefix}keyId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'revoked': bundle.inputData?.[`${keyPrefix}revoked`],
        }
    },
}
