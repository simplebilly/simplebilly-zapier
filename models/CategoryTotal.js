const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}category_id`,
                label: `[${labelPrefix}category_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}share_pct`,
                label: `[${labelPrefix}share_pct]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}tco2e`,
                label: `[${labelPrefix}tco2e]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'category_id': bundle.inputData?.[`${keyPrefix}category_id`],
            'share_pct': bundle.inputData?.[`${keyPrefix}share_pct`],
            'tco2e': bundle.inputData?.[`${keyPrefix}tco2e`],
        }
    },
}
