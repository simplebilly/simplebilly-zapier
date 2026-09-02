const utils = require('../utils/utils');
const RevenueItem = require('../models/RevenueItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}revenue_breakdown`,
                label: `[${labelPrefix}revenue_breakdown]`,
                children: RevenueItem.fields(`${keyPrefix}revenue_breakdown${!isInput ? '[]' : ''}`, isInput, true), 
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
            'revenue_breakdown': utils.childMapping(bundle.inputData?.[`${keyPrefix}revenue_breakdown`], `${keyPrefix}revenue_breakdown`, RevenueItem),
            'total_revenue': bundle.inputData?.[`${keyPrefix}total_revenue`],
        }
    },
}
