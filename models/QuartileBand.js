const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}female_share_pct`,
                label: `[${labelPrefix}female_share_pct]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}hourly_median`,
                label: `[${labelPrefix}hourly_median]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}male_share_pct`,
                label: `[${labelPrefix}male_share_pct]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}quartile`,
                label: `[${labelPrefix}quartile]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'female_share_pct': bundle.inputData?.[`${keyPrefix}female_share_pct`],
            'hourly_median': bundle.inputData?.[`${keyPrefix}hourly_median`],
            'male_share_pct': bundle.inputData?.[`${keyPrefix}male_share_pct`],
            'quartile': bundle.inputData?.[`${keyPrefix}quartile`],
        }
    },
}
