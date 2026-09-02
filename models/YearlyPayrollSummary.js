const utils = require('../utils/utils');
const PayrollSummaryItem = require('../models/PayrollSummaryItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}avg_employee_count`,
                label: `[${labelPrefix}avg_employee_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}months`,
                label: `[${labelPrefix}months]`,
                children: PayrollSummaryItem.fields(`${keyPrefix}months${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}yearly_employer_cost`,
                label: `[${labelPrefix}yearly_employer_cost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}yearly_gross`,
                label: `[${labelPrefix}yearly_gross]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}yearly_net`,
                label: `[${labelPrefix}yearly_net]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'avg_employee_count': bundle.inputData?.[`${keyPrefix}avg_employee_count`],
            'months': utils.childMapping(bundle.inputData?.[`${keyPrefix}months`], `${keyPrefix}months`, PayrollSummaryItem),
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'yearly_employer_cost': bundle.inputData?.[`${keyPrefix}yearly_employer_cost`],
            'yearly_gross': bundle.inputData?.[`${keyPrefix}yearly_gross`],
            'yearly_net': bundle.inputData?.[`${keyPrefix}yearly_net`],
        }
    },
}
