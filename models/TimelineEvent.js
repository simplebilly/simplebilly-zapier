const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}date`,
                label: `RFC3339 UTC timestamp for sorting. - [${labelPrefix}date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}detail`,
                label: `[${labelPrefix}detail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `Source record id (stringified). - [${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `Source module: communication | quotation | order | invoice | attachment. - [${labelPrefix}type]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'detail': bundle.inputData?.[`${keyPrefix}detail`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
