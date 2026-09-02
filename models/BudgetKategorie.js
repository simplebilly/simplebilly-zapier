const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}budget`,
                label: `[${labelPrefix}budget]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}differenz`,
                label: `[${labelPrefix}differenz]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}goal`,
                label: `User-set monthly goal for the category, if any. - [${labelPrefix}goal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ist`,
                label: `[${labelPrefix}ist]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kategorie`,
                label: `[${labelPrefix}kategorie]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'budget': bundle.inputData?.[`${keyPrefix}budget`],
            'differenz': bundle.inputData?.[`${keyPrefix}differenz`],
            'goal': bundle.inputData?.[`${keyPrefix}goal`],
            'ist': bundle.inputData?.[`${keyPrefix}ist`],
            'kategorie': bundle.inputData?.[`${keyPrefix}kategorie`],
        }
    },
}
