const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}monthly_goal`,
                label: `Monthly goal amount (gross). 0 means \"no goal\" (fallback to default). - [${labelPrefix}monthly_goal]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `Budget year the goal applies to. - [${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'monthly_goal': bundle.inputData?.[`${keyPrefix}monthly_goal`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
