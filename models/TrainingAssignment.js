const utils = require('../utils/utils');
const AssignmentStatus = require('../models/AssignmentStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assignedBy`,
                label: `[${labelPrefix}assignedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deletedAt`,
                label: `[${labelPrefix}deletedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dueDate`,
                label: `[${labelPrefix}dueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeId`,
                label: `[${labelPrefix}employeeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...AssignmentStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trainingId`,
                label: `[${labelPrefix}trainingId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assignedBy': bundle.inputData?.[`${keyPrefix}assignedBy`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'deletedAt': bundle.inputData?.[`${keyPrefix}deletedAt`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'trainingId': bundle.inputData?.[`${keyPrefix}trainingId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
