const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}clock_in`,
                label: `[${labelPrefix}clock_in]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}clock_out`,
                label: `[${labelPrefix}clock_out]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
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
                key: `${keyPrefix}hours`,
                label: `[${labelPrefix}hours]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}time_entry_id`,
                label: `[${labelPrefix}time_entry_id]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'clock_in': bundle.inputData?.[`${keyPrefix}clock_in`],
            'clock_out': bundle.inputData?.[`${keyPrefix}clock_out`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'employee_id': bundle.inputData?.[`${keyPrefix}employee_id`],
            'hours': bundle.inputData?.[`${keyPrefix}hours`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'time_entry_id': bundle.inputData?.[`${keyPrefix}time_entry_id`],
        }
    },
}
