const utils = require('../utils/utils');
const AnlageSKfzHinweis = require('../models/AnlageSKfzHinweis');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}gewinn_verlust`,
                label: `[${labelPrefix}gewinn_verlust]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}kfz_hinweise`,
                label: `[${labelPrefix}kfz_hinweise]`,
                children: AnlageSKfzHinweis.fields(`${keyPrefix}kfz_hinweise${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gewinn_verlust': bundle.inputData?.[`${keyPrefix}gewinn_verlust`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'kfz_hinweise': utils.childMapping(bundle.inputData?.[`${keyPrefix}kfz_hinweise`], `${keyPrefix}kfz_hinweise`, AnlageSKfzHinweis),
        }
    },
}
