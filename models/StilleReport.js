const utils = require('../utils/utils');
const StillePartnerZeile = require('../models/StillePartnerZeile');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}jahresueberschuss`,
                label: `[${labelPrefix}jahresueberschuss]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}partners`,
                label: `[${labelPrefix}partners]`,
                children: StillePartnerZeile.fields(`${keyPrefix}partners${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'jahresueberschuss': bundle.inputData?.[`${keyPrefix}jahresueberschuss`],
            'partners': utils.childMapping(bundle.inputData?.[`${keyPrefix}partners`], `${keyPrefix}partners`, StillePartnerZeile),
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
