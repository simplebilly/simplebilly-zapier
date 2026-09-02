const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}employee_id`,
                label: `[${labelPrefix}employee_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}first_name`,
                label: `[${labelPrefix}first_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gender`,
                label: `[${labelPrefix}gender]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}group_median_hourly`,
                label: `[${labelPrefix}group_median_hourly]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}group_median_monthly`,
                label: `[${labelPrefix}group_median_monthly]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}group_size`,
                label: `[${labelPrefix}group_size]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}job_title`,
                label: `[${labelPrefix}job_title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `[${labelPrefix}last_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}overall_median_hourly`,
                label: `[${labelPrefix}overall_median_hourly]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}own_hourly_gross`,
                label: `[${labelPrefix}own_hourly_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}own_monthly_gross`,
                label: `[${labelPrefix}own_monthly_gross]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'employee_id': bundle.inputData?.[`${keyPrefix}employee_id`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'gender': bundle.inputData?.[`${keyPrefix}gender`],
            'group_median_hourly': bundle.inputData?.[`${keyPrefix}group_median_hourly`],
            'group_median_monthly': bundle.inputData?.[`${keyPrefix}group_median_monthly`],
            'group_size': bundle.inputData?.[`${keyPrefix}group_size`],
            'job_title': bundle.inputData?.[`${keyPrefix}job_title`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'overall_median_hourly': bundle.inputData?.[`${keyPrefix}overall_median_hourly`],
            'own_hourly_gross': bundle.inputData?.[`${keyPrefix}own_hourly_gross`],
            'own_monthly_gross': bundle.inputData?.[`${keyPrefix}own_monthly_gross`],
        }
    },
}
