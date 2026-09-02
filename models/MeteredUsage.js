const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}limit`,
                label: `[${labelPrefix}limit]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}meter`,
                label: `[${labelPrefix}meter]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}used`,
                label: `[${labelPrefix}used]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'limit': bundle.inputData?.[`${keyPrefix}limit`],
            'meter': bundle.inputData?.[`${keyPrefix}meter`],
            'used': bundle.inputData?.[`${keyPrefix}used`],
        }
    },
}
