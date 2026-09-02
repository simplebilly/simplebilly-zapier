const utils = require('../utils/utils');
const PackingQueueItem = require('../models/PackingQueueItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: PackingQueueItem.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}page`,
                label: `[${labelPrefix}page]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}page_size`,
                label: `[${labelPrefix}page_size]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total_count`,
                label: `[${labelPrefix}total_count]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, PackingQueueItem),
            'page': bundle.inputData?.[`${keyPrefix}page`],
            'page_size': bundle.inputData?.[`${keyPrefix}page_size`],
            'total_count': bundle.inputData?.[`${keyPrefix}total_count`],
        }
    },
}
