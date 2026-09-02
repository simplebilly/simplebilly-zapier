const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bodyHtml`,
                label: `[${labelPrefix}bodyHtml]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyHtmlEn`,
                label: `[${labelPrefix}bodyHtmlEn]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
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
                key: `${keyPrefix}titleEn`,
                label: `[${labelPrefix}titleEn]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'bodyHtmlEn': bundle.inputData?.[`${keyPrefix}bodyHtmlEn`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'titleEn': bundle.inputData?.[`${keyPrefix}titleEn`],
        }
    },
}
