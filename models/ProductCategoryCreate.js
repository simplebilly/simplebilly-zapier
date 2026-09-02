const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCategoryId`,
                label: `References the category entity. - [${labelPrefix}parentCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sortOrder`,
                label: `[${labelPrefix}sortOrder]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'parentCategoryId': bundle.inputData?.[`${keyPrefix}parentCategoryId`],
            'sortOrder': bundle.inputData?.[`${keyPrefix}sortOrder`],
        }
    },
}
