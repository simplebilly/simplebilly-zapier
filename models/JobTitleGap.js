const utils = require('../utils/utils');

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
                key: `${keyPrefix}female_mean_hourly`,
                label: `[${labelPrefix}female_mean_hourly]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}job_title`,
                label: `[${labelPrefix}job_title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}male_mean_hourly`,
                label: `[${labelPrefix}male_mean_hourly]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}mean_gap_pct`,
                label: `[${labelPrefix}mean_gap_pct]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}median_gap_pct`,
                label: `[${labelPrefix}median_gap_pct]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'employee_count': bundle.inputData?.[`${keyPrefix}employee_count`],
            'female_mean_hourly': bundle.inputData?.[`${keyPrefix}female_mean_hourly`],
            'job_title': bundle.inputData?.[`${keyPrefix}job_title`],
            'male_mean_hourly': bundle.inputData?.[`${keyPrefix}male_mean_hourly`],
            'mean_gap_pct': bundle.inputData?.[`${keyPrefix}mean_gap_pct`],
            'median_gap_pct': bundle.inputData?.[`${keyPrefix}median_gap_pct`],
        }
    },
}
