const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}automationKey`,
                label: `[${labelPrefix}automationKey]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}lastRunAt`,
                label: `[${labelPrefix}lastRunAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nextRunAt`,
                label: `[${labelPrefix}nextRunAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'automationKey': bundle.inputData?.[`${keyPrefix}automationKey`],
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'lastRunAt': bundle.inputData?.[`${keyPrefix}lastRunAt`],
            'nextRunAt': bundle.inputData?.[`${keyPrefix}nextRunAt`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
