const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assignedCount`,
                label: `[${labelPrefix}assignedCount]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}completedCount`,
                label: `[${labelPrefix}completedCount]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}overdueCount`,
                label: `[${labelPrefix}overdueCount]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}trainingId`,
                label: `[${labelPrefix}trainingId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assignedCount': bundle.inputData?.[`${keyPrefix}assignedCount`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'completedCount': bundle.inputData?.[`${keyPrefix}completedCount`],
            'overdueCount': bundle.inputData?.[`${keyPrefix}overdueCount`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'trainingId': bundle.inputData?.[`${keyPrefix}trainingId`],
        }
    },
}
