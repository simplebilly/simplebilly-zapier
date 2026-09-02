const utils = require('../utils/utils');
const ReplenishmentSuggestionLine = require('../models/ReplenishmentSuggestionLine');

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
                children: ReplenishmentSuggestionLine.fields(`${keyPrefix}lines${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}targetWarehouseId`,
                label: `[${labelPrefix}targetWarehouseId]`,
                required: true,
                type: 'string',
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
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, ReplenishmentSuggestionLine),
            'targetWarehouseId': bundle.inputData?.[`${keyPrefix}targetWarehouseId`],
            'totalSuggestedQuantity': bundle.inputData?.[`${keyPrefix}totalSuggestedQuantity`],
        }
    },
}
