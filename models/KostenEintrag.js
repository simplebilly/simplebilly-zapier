const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}beschreibung`,
                label: `[${labelPrefix}beschreibung]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}betrag`,
                label: `[${labelPrefix}betrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}datum`,
                label: `[${labelPrefix}datum]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}typ`,
                label: `[${labelPrefix}typ]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'beschreibung': bundle.inputData?.[`${keyPrefix}beschreibung`],
            'betrag': bundle.inputData?.[`${keyPrefix}betrag`],
            'datum': bundle.inputData?.[`${keyPrefix}datum`],
            'typ': bundle.inputData?.[`${keyPrefix}typ`],
        }
    },
}
