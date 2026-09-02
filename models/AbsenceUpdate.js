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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'absenceType': bundle.inputData?.[`${keyPrefix}absenceType`],
            'approvedAt': bundle.inputData?.[`${keyPrefix}approvedAt`],
            'approvedBy': bundle.inputData?.[`${keyPrefix}approvedBy`],
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
