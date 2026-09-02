const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}erp`,
                label: `[${labelPrefix}erp]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}fancy_reports`,
                label: `[${labelPrefix}fancy_reports]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tax_automations`,
                label: `[${labelPrefix}tax_automations]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'erp': bundle.inputData?.[`${keyPrefix}erp`],
            'fancy_reports': bundle.inputData?.[`${keyPrefix}fancy_reports`],
            'tax_automations': bundle.inputData?.[`${keyPrefix}tax_automations`],
        }
    },
}
