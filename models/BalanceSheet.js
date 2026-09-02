const utils = require('../utils/utils');
const BalanceItem = require('../models/BalanceItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assets`,
                label: `[${labelPrefix}assets]`,
                children: BalanceItem.fields(`${keyPrefix}assets${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}balanced`,
                label: `[${labelPrefix}balanced]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}equity_liabilities`,
                label: `[${labelPrefix}equity_liabilities]`,
                children: BalanceItem.fields(`${keyPrefix}equity_liabilities${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_assets`,
                label: `[${labelPrefix}total_assets]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_equity_liabilities`,
                label: `[${labelPrefix}total_equity_liabilities]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assets': utils.childMapping(bundle.inputData?.[`${keyPrefix}assets`], `${keyPrefix}assets`, BalanceItem),
            'balanced': bundle.inputData?.[`${keyPrefix}balanced`],
            'equity_liabilities': utils.childMapping(bundle.inputData?.[`${keyPrefix}equity_liabilities`], `${keyPrefix}equity_liabilities`, BalanceItem),
            'total_assets': bundle.inputData?.[`${keyPrefix}total_assets`],
            'total_equity_liabilities': bundle.inputData?.[`${keyPrefix}total_equity_liabilities`],
        }
    },
}
