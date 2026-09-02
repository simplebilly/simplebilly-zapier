const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}itemsRestocked`,
                label: `[${labelPrefix}itemsRestocked]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}itemsScrapped`,
                label: `[${labelPrefix}itemsScrapped]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}returns`,
                label: `[${labelPrefix}returns]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'itemsRestocked': bundle.inputData?.[`${keyPrefix}itemsRestocked`],
            'itemsScrapped': bundle.inputData?.[`${keyPrefix}itemsScrapped`],
            'returns': bundle.inputData?.[`${keyPrefix}returns`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
