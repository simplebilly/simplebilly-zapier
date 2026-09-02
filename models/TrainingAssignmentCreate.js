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
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...AssignmentStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}trainingId`,
                label: `[${labelPrefix}trainingId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assignedBy': bundle.inputData?.[`${keyPrefix}assignedBy`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'trainingId': bundle.inputData?.[`${keyPrefix}trainingId`],
        }
    },
}
