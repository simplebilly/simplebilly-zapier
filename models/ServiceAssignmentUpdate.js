const utils = require('../utils/utils');
const ServiceAssignmentStatus = require('../models/ServiceAssignmentStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}employeeId`,
                label: `References the employees entity. - [${labelPrefix}employeeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobId`,
                label: `References the service_jobs entity. - [${labelPrefix}jobId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scheduledDate`,
                label: `Work day the assignment is scheduled for. - [${labelPrefix}scheduledDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scheduledEnd`,
                label: `Planned end time of the assignment. - [${labelPrefix}scheduledEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scheduledStart`,
                label: `Planned start time of the assignment. - [${labelPrefix}scheduledStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ServiceAssignmentStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'jobId': bundle.inputData?.[`${keyPrefix}jobId`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'scheduledDate': bundle.inputData?.[`${keyPrefix}scheduledDate`],
            'scheduledEnd': bundle.inputData?.[`${keyPrefix}scheduledEnd`],
            'scheduledStart': bundle.inputData?.[`${keyPrefix}scheduledStart`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
