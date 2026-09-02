const utils = require('../utils/utils');
const PublicReturnItem = require('../models/PublicReturnItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: PublicReturnItem.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `[${labelPrefix}orderNumber]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, PublicReturnItem),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
        }
    },
}
