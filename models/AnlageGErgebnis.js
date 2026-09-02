const utils = require('../utils/utils');
const AnlageGKfzHinweis = require('../models/AnlageGKfzHinweis');

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
                key: `${keyPrefix}gewst_gezahlt`,
                label: `[${labelPrefix}gewst_gezahlt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewst_messbetrag_approx`,
                label: `[${labelPrefix}gewst_messbetrag_approx]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gewst_pflichtig`,
                label: `[${labelPrefix}gewst_pflichtig]`,
                required: true,
                type: 'boolean',
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
                children: AnlageGKfzHinweis.fields(`${keyPrefix}kfz_hinweise${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'gewinn_verlust': bundle.inputData?.[`${keyPrefix}gewinn_verlust`],
            'gewst_gezahlt': bundle.inputData?.[`${keyPrefix}gewst_gezahlt`],
            'gewst_messbetrag_approx': bundle.inputData?.[`${keyPrefix}gewst_messbetrag_approx`],
            'gewst_pflichtig': bundle.inputData?.[`${keyPrefix}gewst_pflichtig`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'kfz_hinweise': utils.childMapping(bundle.inputData?.[`${keyPrefix}kfz_hinweise`], `${keyPrefix}kfz_hinweise`, AnlageGKfzHinweis),
        }
    },
}
