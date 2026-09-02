const utils = require('../utils/utils');
const BilanzItem = require('../models/BilanzItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}aktiva`,
                label: `[${labelPrefix}aktiva]`,
                children: BilanzItem.fields(`${keyPrefix}aktiva${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}balanced`,
                label: `[${labelPrefix}balanced]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}passiva`,
                label: `[${labelPrefix}passiva]`,
                children: BilanzItem.fields(`${keyPrefix}passiva${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_aktiva`,
                label: `[${labelPrefix}total_aktiva]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_passiva`,
                label: `[${labelPrefix}total_passiva]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'aktiva': utils.childMapping(bundle.inputData?.[`${keyPrefix}aktiva`], `${keyPrefix}aktiva`, BilanzItem),
            'balanced': bundle.inputData?.[`${keyPrefix}balanced`],
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'passiva': utils.childMapping(bundle.inputData?.[`${keyPrefix}passiva`], `${keyPrefix}passiva`, BilanzItem),
            'period': bundle.inputData?.[`${keyPrefix}period`],
            'total_aktiva': bundle.inputData?.[`${keyPrefix}total_aktiva`],
            'total_passiva': bundle.inputData?.[`${keyPrefix}total_passiva`],
        }
    },
}
