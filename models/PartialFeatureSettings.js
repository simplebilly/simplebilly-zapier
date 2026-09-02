const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}onlineshop`,
                label: `[${labelPrefix}onlineshop]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportBilanz`,
                label: `[${labelPrefix}reportBilanz]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportBwa`,
                label: `[${labelPrefix}reportBwa]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportEuer`,
                label: `[${labelPrefix}reportEuer]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportGewerbesteuer`,
                label: `[${labelPrefix}reportGewerbesteuer]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportGuv`,
                label: `[${labelPrefix}reportGuv]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportKst`,
                label: `[${labelPrefix}reportKst]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportUstva`,
                label: `[${labelPrefix}reportUstva]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'onlineshop': bundle.inputData?.[`${keyPrefix}onlineshop`],
            'reportBilanz': bundle.inputData?.[`${keyPrefix}reportBilanz`],
            'reportBwa': bundle.inputData?.[`${keyPrefix}reportBwa`],
            'reportEuer': bundle.inputData?.[`${keyPrefix}reportEuer`],
            'reportGewerbesteuer': bundle.inputData?.[`${keyPrefix}reportGewerbesteuer`],
            'reportGuv': bundle.inputData?.[`${keyPrefix}reportGuv`],
            'reportKst': bundle.inputData?.[`${keyPrefix}reportKst`],
            'reportUstva': bundle.inputData?.[`${keyPrefix}reportUstva`],
        }
    },
}
