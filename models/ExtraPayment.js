const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}employee_id`,
                label: `[${labelPrefix}employee_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'employee_id': bundle.inputData?.[`${keyPrefix}employee_id`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
        }
    },
}
