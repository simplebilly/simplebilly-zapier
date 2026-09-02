const utils = require('../utils/utils');
const ReorderProposalLine = require('../models/ReorderProposalLine');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}generatedAt`,
                label: `[${labelPrefix}generatedAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lines`,
                label: `[${labelPrefix}lines]`,
                children: ReorderProposalLine.fields(`${keyPrefix}lines${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}totalSuggestedQuantity`,
                label: `[${labelPrefix}totalSuggestedQuantity]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'generatedAt': bundle.inputData?.[`${keyPrefix}generatedAt`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, ReorderProposalLine),
            'totalSuggestedQuantity': bundle.inputData?.[`${keyPrefix}totalSuggestedQuantity`],
        }
    },
}
