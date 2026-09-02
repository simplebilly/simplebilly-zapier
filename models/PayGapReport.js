const utils = require('../utils/utils');
const JobTitleGap = require('../models/JobTitleGap');
const QuartileBand = require('../models/QuartileBand');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}by_job_title`,
                label: `[${labelPrefix}by_job_title]`,
                children: JobTitleGap.fields(`${keyPrefix}by_job_title${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}diverse_count`,
                label: `[${labelPrefix}diverse_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}employee_count`,
                label: `[${labelPrefix}employee_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}female_count`,
                label: `[${labelPrefix}female_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}male_count`,
                label: `[${labelPrefix}male_count]`,
                required: true,
                type: 'integer',
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
            {
                key: `${keyPrefix}quartiles`,
                label: `[${labelPrefix}quartiles]`,
                children: QuartileBand.fields(`${keyPrefix}quartiles${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'by_job_title': utils.childMapping(bundle.inputData?.[`${keyPrefix}by_job_title`], `${keyPrefix}by_job_title`, JobTitleGap),
            'diverse_count': bundle.inputData?.[`${keyPrefix}diverse_count`],
            'employee_count': bundle.inputData?.[`${keyPrefix}employee_count`],
            'female_count': bundle.inputData?.[`${keyPrefix}female_count`],
            'male_count': bundle.inputData?.[`${keyPrefix}male_count`],
            'mean_gap_pct': bundle.inputData?.[`${keyPrefix}mean_gap_pct`],
            'median_gap_pct': bundle.inputData?.[`${keyPrefix}median_gap_pct`],
            'quartiles': utils.childMapping(bundle.inputData?.[`${keyPrefix}quartiles`], `${keyPrefix}quartiles`, QuartileBand),
        }
    },
}
