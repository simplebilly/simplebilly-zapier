const utils = require('../utils/utils');
const CountryCode = require('../models/CountryCode');
const EmployeeStatus = require('../models/EmployeeStatus');
const Gender = require('../models/Gender');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}address`,
                label: `[${labelPrefix}address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backupEmployeeId`,
                label: `References another employee who covers when this employee is absent. - [${labelPrefix}backupEmployeeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bic`,
                label: `[${labelPrefix}bic]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}city`,
                label: `[${labelPrefix}city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                ...CountryCode.fields(`${keyPrefix}country`, isInput),
            },
            {
                key: `${keyPrefix}dateOfBirth`,
                label: `[${labelPrefix}dateOfBirth]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}departmentId`,
                label: `References the department entity. - [${labelPrefix}departmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstName`,
                label: `[${labelPrefix}firstName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gender`,
                ...Gender.fields(`${keyPrefix}gender`, isInput),
            },
            {
                key: `${keyPrefix}hireDate`,
                label: `[${labelPrefix}hireDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hourlyCost`,
                label: `Hourly cost rate in EUR for labor-cost reporting; when unset the rate is derived from `monthly_salary / (weekly_hours * 4.33)`. - [${labelPrefix}hourlyCost]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iban`,
                label: `[${labelPrefix}iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastLogin`,
                label: `[${labelPrefix}lastLogin]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastUpdated`,
                label: `[${labelPrefix}lastUpdated]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}monthlySalary`,
                label: `Gross monthly salary in EUR for pay-transparency reporting. - [${labelPrefix}monthlySalary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...EmployeeStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}userId`,
                label: `References the user entity. - [${labelPrefix}userId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weeklyHours`,
                label: `Contractual weekly working hours for pay-transparency normalization. - [${labelPrefix}weeklyHours]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}zip`,
                label: `[${labelPrefix}zip]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'backupEmployeeId': bundle.inputData?.[`${keyPrefix}backupEmployeeId`],
            'bic': bundle.inputData?.[`${keyPrefix}bic`],
            'city': bundle.inputData?.[`${keyPrefix}city`],
            'country': bundle.inputData?.[`${keyPrefix}country`],
            'dateOfBirth': bundle.inputData?.[`${keyPrefix}dateOfBirth`],
            'departmentId': bundle.inputData?.[`${keyPrefix}departmentId`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'gender': bundle.inputData?.[`${keyPrefix}gender`],
            'hireDate': bundle.inputData?.[`${keyPrefix}hireDate`],
            'hourlyCost': bundle.inputData?.[`${keyPrefix}hourlyCost`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'lastLogin': bundle.inputData?.[`${keyPrefix}lastLogin`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'lastUpdated': bundle.inputData?.[`${keyPrefix}lastUpdated`],
            'monthlySalary': bundle.inputData?.[`${keyPrefix}monthlySalary`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'weeklyHours': bundle.inputData?.[`${keyPrefix}weeklyHours`],
            'zip': bundle.inputData?.[`${keyPrefix}zip`],
        }
    },
}
