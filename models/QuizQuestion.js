const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}options`,
                label: `[${labelPrefix}options]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}optionsEn`,
                label: `[${labelPrefix}optionsEn]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}question`,
                label: `[${labelPrefix}question]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}questionEn`,
                label: `[${labelPrefix}questionEn]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'options': bundle.inputData?.[`${keyPrefix}options`],
            'optionsEn': bundle.inputData?.[`${keyPrefix}optionsEn`],
            'question': bundle.inputData?.[`${keyPrefix}question`],
            'questionEn': bundle.inputData?.[`${keyPrefix}questionEn`],
        }
    },
}
