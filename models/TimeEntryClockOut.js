const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}clock_out`,
                label: `[${labelPrefix}clock_out]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hours`,
                label: `Optional manual hours; when absent, derived from clock_in..clock_out. - [${labelPrefix}hours]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'clock_out': bundle.inputData?.[`${keyPrefix}clock_out`],
            'hours': bundle.inputData?.[`${keyPrefix}hours`],
        }
    },
}
