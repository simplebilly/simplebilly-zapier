const utils = require('../utils/utils');
const BWAExpenses = require('../models/BWAExpenses');
const BWARevenue = require('../models/BWARevenue');
const BWASummary = require('../models/BWASummary');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...BWAExpenses.fields(`${keyPrefix}expenses`, isInput),
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
            ...BWARevenue.fields(`${keyPrefix}revenue`, isInput),
            ...BWASummary.fields(`${keyPrefix}summary`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expenses': utils.removeIfEmpty(BWAExpenses.mapping(bundle, `${keyPrefix}expenses`)),
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'period': bundle.inputData?.[`${keyPrefix}period`],
            'revenue': utils.removeIfEmpty(BWARevenue.mapping(bundle, `${keyPrefix}revenue`)),
            'summary': utils.removeIfEmpty(BWASummary.mapping(bundle, `${keyPrefix}summary`)),
        }
    },
}
