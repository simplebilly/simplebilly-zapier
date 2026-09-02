const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}activity_lines`,
                label: `[${labelPrefix}activity_lines]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}activity_share_pct`,
                label: `[${labelPrefix}activity_share_pct]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}spend_lines`,
                label: `[${labelPrefix}spend_lines]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'activity_lines': bundle.inputData?.[`${keyPrefix}activity_lines`],
            'activity_share_pct': bundle.inputData?.[`${keyPrefix}activity_share_pct`],
            'spend_lines': bundle.inputData?.[`${keyPrefix}spend_lines`],
        }
    },
}
