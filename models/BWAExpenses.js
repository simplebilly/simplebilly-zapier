const utils = require('../utils/utils');
const ExpenseItem = require('../models/ExpenseItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}expense_breakdown`,
                label: `[${labelPrefix}expense_breakdown]`,
                children: ExpenseItem.fields(`${keyPrefix}expense_breakdown${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_expenses`,
                label: `[${labelPrefix}total_expenses]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expense_breakdown': utils.childMapping(bundle.inputData?.[`${keyPrefix}expense_breakdown`], `${keyPrefix}expense_breakdown`, ExpenseItem),
            'total_expenses': bundle.inputData?.[`${keyPrefix}total_expenses`],
        }
    },
}
