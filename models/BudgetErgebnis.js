const utils = require('../utils/utils');
const BudgetKategorie = require('../models/BudgetKategorie');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}monat`,
                label: `[${labelPrefix}monat]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}monats_budget`,
                label: `[${labelPrefix}monats_budget]`,
                children: BudgetKategorie.fields(`${keyPrefix}monats_budget${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}prognose_restjahr`,
                label: `[${labelPrefix}prognose_restjahr]`,
                children: BudgetKategorie.fields(`${keyPrefix}prognose_restjahr${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'monat': bundle.inputData?.[`${keyPrefix}monat`],
            'monats_budget': utils.childMapping(bundle.inputData?.[`${keyPrefix}monats_budget`], `${keyPrefix}monats_budget`, BudgetKategorie),
            'prognose_restjahr': utils.childMapping(bundle.inputData?.[`${keyPrefix}prognose_restjahr`], `${keyPrefix}prognose_restjahr`, BudgetKategorie),
        }
    },
}
