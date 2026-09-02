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
                key: `${keyPrefix}defaultDay`,
                label: `[${labelPrefix}defaultDay]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
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
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                required: true,
                type: 'string',
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
                key: `${keyPrefix}scheduleKind`,
                label: `[${labelPrefix}scheduleKind]`,
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
            'defaultDay': bundle.inputData?.[`${keyPrefix}defaultDay`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'lastRunAt': bundle.inputData?.[`${keyPrefix}lastRunAt`],
            'nextRunAt': bundle.inputData?.[`${keyPrefix}nextRunAt`],
            'scheduleKind': bundle.inputData?.[`${keyPrefix}scheduleKind`],
        }
    },
}
