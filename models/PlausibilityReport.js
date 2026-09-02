const utils = require('../utils/utils');
const PlausibilityCheck = require('../models/PlausibilityCheck');
const PlausibilitySummary = require('../models/PlausibilitySummary');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}checks`,
                label: `[${labelPrefix}checks]`,
                children: PlausibilityCheck.fields(`${keyPrefix}checks${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            ...PlausibilitySummary.fields(`${keyPrefix}summary`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'checks': utils.childMapping(bundle.inputData?.[`${keyPrefix}checks`], `${keyPrefix}checks`, PlausibilityCheck),
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'summary': utils.removeIfEmpty(PlausibilitySummary.mapping(bundle, `${keyPrefix}summary`)),
        }
    },
}
