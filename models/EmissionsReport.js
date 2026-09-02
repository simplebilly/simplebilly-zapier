const utils = require('../utils/utils');
const CategoryTotal = require('../models/CategoryTotal');
const DataQuality = require('../models/DataQuality');
const ScopeTotal = require('../models/ScopeTotal');
const TargetProgress = require('../models/TargetProgress');
const YearTotal = require('../models/YearTotal');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}by_category`,
                label: `[${labelPrefix}by_category]`,
                children: CategoryTotal.fields(`${keyPrefix}by_category${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}by_scope`,
                label: `[${labelPrefix}by_scope]`,
                children: ScopeTotal.fields(`${keyPrefix}by_scope${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}by_year`,
                label: `[${labelPrefix}by_year]`,
                children: YearTotal.fields(`${keyPrefix}by_year${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...DataQuality.fields(`${keyPrefix}data_quality`, isInput),
            {
                key: `${keyPrefix}intensity_per_employee`,
                label: `[${labelPrefix}intensity_per_employee]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}intensity_per_revenue_mio`,
                label: `tCO2e per million EUR net revenue. - [${labelPrefix}intensity_per_revenue_mio]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}net_revenue`,
                label: `Sum of paid/sent/partially-paid invoices (EUR net) in the year. - [${labelPrefix}net_revenue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}spend_based_estimate_tco2e`,
                label: `Spend-based estimate from bookkeeping payments (EXIOBASE factor). - [${labelPrefix}spend_based_estimate_tco2e]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}targets`,
                label: `[${labelPrefix}targets]`,
                children: TargetProgress.fields(`${keyPrefix}targets${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_tco2e`,
                label: `[${labelPrefix}total_tco2e]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'by_category': utils.childMapping(bundle.inputData?.[`${keyPrefix}by_category`], `${keyPrefix}by_category`, CategoryTotal),
            'by_scope': utils.childMapping(bundle.inputData?.[`${keyPrefix}by_scope`], `${keyPrefix}by_scope`, ScopeTotal),
            'by_year': utils.childMapping(bundle.inputData?.[`${keyPrefix}by_year`], `${keyPrefix}by_year`, YearTotal),
            'data_quality': utils.removeIfEmpty(DataQuality.mapping(bundle, `${keyPrefix}data_quality`)),
            'intensity_per_employee': bundle.inputData?.[`${keyPrefix}intensity_per_employee`],
            'intensity_per_revenue_mio': bundle.inputData?.[`${keyPrefix}intensity_per_revenue_mio`],
            'net_revenue': bundle.inputData?.[`${keyPrefix}net_revenue`],
            'spend_based_estimate_tco2e': bundle.inputData?.[`${keyPrefix}spend_based_estimate_tco2e`],
            'targets': utils.childMapping(bundle.inputData?.[`${keyPrefix}targets`], `${keyPrefix}targets`, TargetProgress),
            'total_tco2e': bundle.inputData?.[`${keyPrefix}total_tco2e`],
        }
    },
}
