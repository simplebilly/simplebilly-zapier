const utils = require('../utils/utils');
const PayrollRunStatus = require('../models/PayrollRunStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}employee_count`,
                label: `[${labelPrefix}employee_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}month`,
                label: `[${labelPrefix}month]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...PayrollRunStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}total_employer_cost`,
                label: `[${labelPrefix}total_employer_cost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_gross`,
                label: `[${labelPrefix}total_gross]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_net`,
                label: `[${labelPrefix}total_net]`,
                required: true,
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
            'employee_count': bundle.inputData?.[`${keyPrefix}employee_count`],
            'month': bundle.inputData?.[`${keyPrefix}month`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'total_employer_cost': bundle.inputData?.[`${keyPrefix}total_employer_cost`],
            'total_gross': bundle.inputData?.[`${keyPrefix}total_gross`],
            'total_net': bundle.inputData?.[`${keyPrefix}total_net`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
