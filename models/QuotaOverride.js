const utils = require('../utils/utils');
const QuotaOverrideFeatures = require('../models/QuotaOverrideFeatures');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...QuotaOverrideFeatures.fields(`${keyPrefix}features`, isInput),
            {
                key: `${keyPrefix}max_connectors`,
                label: `[${labelPrefix}max_connectors]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}max_invoices_per_month`,
                label: `[${labelPrefix}max_invoices_per_month]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}max_users`,
                label: `[${labelPrefix}max_users]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}metered`,
                label: `[${labelPrefix}metered]`,
                dict: true,
            },
            {
                key: `${keyPrefix}plan`,
                label: `Custom plan id; unknown ids resolve to enterprise limits. - [${labelPrefix}plan]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'features': utils.removeIfEmpty(QuotaOverrideFeatures.mapping(bundle, `${keyPrefix}features`)),
            'max_connectors': bundle.inputData?.[`${keyPrefix}max_connectors`],
            'max_invoices_per_month': bundle.inputData?.[`${keyPrefix}max_invoices_per_month`],
            'max_users': bundle.inputData?.[`${keyPrefix}max_users`],
            'metered': bundle.inputData?.[`${keyPrefix}metered`],
            'plan': bundle.inputData?.[`${keyPrefix}plan`],
        }
    },
}
