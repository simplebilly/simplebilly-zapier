const utils = require('../utils/utils');
const PayrollMonth = require('../models/PayrollMonth');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}firstName`,
                label: `[${labelPrefix}firstName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hourlyGross`,
                label: `[${labelPrefix}hourlyGross]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}monthlySalary`,
                label: `[${labelPrefix}monthlySalary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}months`,
                label: `[${labelPrefix}months]`,
                children: PayrollMonth.fields(`${keyPrefix}months${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}weeklyHours`,
                label: `[${labelPrefix}weeklyHours]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'hourlyGross': bundle.inputData?.[`${keyPrefix}hourlyGross`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'monthlySalary': bundle.inputData?.[`${keyPrefix}monthlySalary`],
            'months': utils.childMapping(bundle.inputData?.[`${keyPrefix}months`], `${keyPrefix}months`, PayrollMonth),
            'weeklyHours': bundle.inputData?.[`${keyPrefix}weeklyHours`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
