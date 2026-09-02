const utils = require('../utils/utils');
const AccountOverview = require('../models/AccountOverview');
const BalanceSheet = require('../models/BalanceSheet');
const IncomeStatement = require('../models/IncomeStatement');
const VatSummary = require('../models/VatSummary');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}account_overview`,
                label: `[${labelPrefix}account_overview]`,
                children: AccountOverview.fields(`${keyPrefix}account_overview${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...BalanceSheet.fields(`${keyPrefix}balance_sheet`, isInput),
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            ...IncomeStatement.fields(`${keyPrefix}income_statement`, isInput),
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
            ...VatSummary.fields(`${keyPrefix}vat_summary`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account_overview': utils.childMapping(bundle.inputData?.[`${keyPrefix}account_overview`], `${keyPrefix}account_overview`, AccountOverview),
            'balance_sheet': utils.removeIfEmpty(BalanceSheet.mapping(bundle, `${keyPrefix}balance_sheet`)),
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'income_statement': utils.removeIfEmpty(IncomeStatement.mapping(bundle, `${keyPrefix}income_statement`)),
            'period': bundle.inputData?.[`${keyPrefix}period`],
            'vat_summary': utils.removeIfEmpty(VatSummary.mapping(bundle, `${keyPrefix}vat_summary`)),
        }
    },
}
