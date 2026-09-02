const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}category`,
                label: `Posting category key (matches `category` on journal entries). - [${labelPrefix}category]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}monthlyGoal`,
                label: `Monthly goal amount (gross). 0 means \"no goal set\". - [${labelPrefix}monthlyGoal]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
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
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'monthlyGoal': bundle.inputData?.[`${keyPrefix}monthlyGoal`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
