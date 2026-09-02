const utils = require('../utils/utils');
const ExtraPayment = require('../models/ExtraPayment');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}employee_ids`,
                label: `[${labelPrefix}employee_ids]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}extra_payments`,
                label: `[${labelPrefix}extra_payments]`,
                children: ExtraPayment.fields(`${keyPrefix}extra_payments${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}month`,
                label: `[${labelPrefix}month]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'employee_ids': bundle.inputData?.[`${keyPrefix}employee_ids`],
            'extra_payments': utils.childMapping(bundle.inputData?.[`${keyPrefix}extra_payments`], `${keyPrefix}extra_payments`, ExtraPayment),
            'month': bundle.inputData?.[`${keyPrefix}month`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
