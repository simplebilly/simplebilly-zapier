const utils = require('../utils/utils');
const AbsenceStatus = require('../models/AbsenceStatus');
const AbsenceType = require('../models/AbsenceType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}absenceType`,
                ...AbsenceType.fields(`${keyPrefix}absenceType`, isInput),
            },
            {
                key: `${keyPrefix}approvedAt`,
                label: `[${labelPrefix}approvedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approvedBy`,
                label: `References the user entity. - [${labelPrefix}approvedBy]`,
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
                key: `${keyPrefix}employeeId`,
                label: `References the employee entity. - [${labelPrefix}employeeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
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
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...AbsenceStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'absenceType': bundle.inputData?.[`${keyPrefix}absenceType`],
            'approvedAt': bundle.inputData?.[`${keyPrefix}approvedAt`],
            'approvedBy': bundle.inputData?.[`${keyPrefix}approvedBy`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'deletedAt': bundle.inputData?.[`${keyPrefix}deletedAt`],
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
