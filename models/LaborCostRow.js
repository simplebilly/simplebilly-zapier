const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}cost`,
                label: `[${labelPrefix}cost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeId`,
                label: `[${labelPrefix}employeeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}groupKey`,
                label: `[${labelPrefix}groupKey]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hours`,
                label: `[${labelPrefix}hours]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'employeeId': bundle.inputData?.[`${keyPrefix}employeeId`],
            'groupKey': bundle.inputData?.[`${keyPrefix}groupKey`],
            'hours': bundle.inputData?.[`${keyPrefix}hours`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
