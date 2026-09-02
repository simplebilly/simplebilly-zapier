const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}connectors`,
                label: `[${labelPrefix}connectors]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}erp`,
                label: `[${labelPrefix}erp]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}fancyReports`,
                label: `[${labelPrefix}fancyReports]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}taxAutomations`,
                label: `[${labelPrefix}taxAutomations]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'connectors': bundle.inputData?.[`${keyPrefix}connectors`],
            'erp': bundle.inputData?.[`${keyPrefix}erp`],
            'fancyReports': bundle.inputData?.[`${keyPrefix}fancyReports`],
            'taxAutomations': bundle.inputData?.[`${keyPrefix}taxAutomations`],
        }
    },
}
