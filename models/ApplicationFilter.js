const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}page`,
                label: `[${labelPrefix}page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}pageSize`,
                label: `[${labelPrefix}pageSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}postingId`,
                label: `[${labelPrefix}postingId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'page': bundle.inputData?.[`${keyPrefix}page`],
            'pageSize': bundle.inputData?.[`${keyPrefix}pageSize`],
            'postingId': bundle.inputData?.[`${keyPrefix}postingId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
