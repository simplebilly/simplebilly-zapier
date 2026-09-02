const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}action`,
                label: `[${labelPrefix}action]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
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
            'action': bundle.inputData?.[`${keyPrefix}action`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
