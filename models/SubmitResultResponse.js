const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}certificateId`,
                label: `[${labelPrefix}certificateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}completionId`,
                label: `[${labelPrefix}completionId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}passScore`,
                label: `[${labelPrefix}passScore]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}passed`,
                label: `[${labelPrefix}passed]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}score`,
                label: `[${labelPrefix}score]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}validUntil`,
                label: `[${labelPrefix}validUntil]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'certificateId': bundle.inputData?.[`${keyPrefix}certificateId`],
            'completionId': bundle.inputData?.[`${keyPrefix}completionId`],
            'passScore': bundle.inputData?.[`${keyPrefix}passScore`],
            'passed': bundle.inputData?.[`${keyPrefix}passed`],
            'score': bundle.inputData?.[`${keyPrefix}score`],
            'validUntil': bundle.inputData?.[`${keyPrefix}validUntil`],
        }
    },
}
