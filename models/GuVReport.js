const utils = require('../utils/utils');
const GuVItem = require('../models/GuVItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}expenses`,
                label: `[${labelPrefix}expenses]`,
                children: GuVItem.fields(`${keyPrefix}expenses${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_income`,
                label: `[${labelPrefix}net_income]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}revenue`,
                label: `[${labelPrefix}revenue]`,
                children: GuVItem.fields(`${keyPrefix}revenue${!isInput ? '[]' : ''}`, isInput, true), 
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
            'expenses': utils.childMapping(bundle.inputData?.[`${keyPrefix}expenses`], `${keyPrefix}expenses`, GuVItem),
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'net_income': bundle.inputData?.[`${keyPrefix}net_income`],
            'period': bundle.inputData?.[`${keyPrefix}period`],
            'revenue': utils.childMapping(bundle.inputData?.[`${keyPrefix}revenue`], `${keyPrefix}revenue`, GuVItem),
            'total_expenses': bundle.inputData?.[`${keyPrefix}total_expenses`],
            'total_revenue': bundle.inputData?.[`${keyPrefix}total_revenue`],
        }
    },
}
