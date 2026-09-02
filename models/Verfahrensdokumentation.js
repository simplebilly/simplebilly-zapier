const utils = require('../utils/utils');
const ComplianceEntry = require('../models/ComplianceEntry');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}entries`,
                label: `[${labelPrefix}entries]`,
                children: ComplianceEntry.fields(`${keyPrefix}entries${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'entries': utils.childMapping(bundle.inputData?.[`${keyPrefix}entries`], `${keyPrefix}entries`, ComplianceEntry),
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
