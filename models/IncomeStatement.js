const utils = require('../utils/utils');
const PnLItem = require('../models/PnLItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}expense_items`,
                label: `[${labelPrefix}expense_items]`,
                children: PnLItem.fields(`${keyPrefix}expense_items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}net_income`,
                label: `[${labelPrefix}net_income]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}revenue_items`,
                label: `[${labelPrefix}revenue_items]`,
                children: PnLItem.fields(`${keyPrefix}revenue_items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_expenses`,
                label: `[${labelPrefix}total_expenses]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_revenue`,
                label: `[${labelPrefix}total_revenue]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expense_items': utils.childMapping(bundle.inputData?.[`${keyPrefix}expense_items`], `${keyPrefix}expense_items`, PnLItem),
            'net_income': bundle.inputData?.[`${keyPrefix}net_income`],
            'revenue_items': utils.childMapping(bundle.inputData?.[`${keyPrefix}revenue_items`], `${keyPrefix}revenue_items`, PnLItem),
            'total_expenses': bundle.inputData?.[`${keyPrefix}total_expenses`],
            'total_revenue': bundle.inputData?.[`${keyPrefix}total_revenue`],
        }
    },
}
