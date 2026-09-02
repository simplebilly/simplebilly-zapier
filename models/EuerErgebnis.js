const utils = require('../utils/utils');
const EuerZeile = require('../models/EuerZeile');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}anlage_zugaenge`,
                label: `[${labelPrefix}anlage_zugaenge]`,
                required: true,
                type: 'string',
            },
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
                key: `${keyPrefix}summe_ausgaben`,
                label: `[${labelPrefix}summe_ausgaben]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}summe_einnahmen`,
                label: `[${labelPrefix}summe_einnahmen]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeilen`,
                label: `[${labelPrefix}zeilen]`,
                children: EuerZeile.fields(`${keyPrefix}zeilen${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'anlage_zugaenge': bundle.inputData?.[`${keyPrefix}anlage_zugaenge`],
            'gewinn_verlust': bundle.inputData?.[`${keyPrefix}gewinn_verlust`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'summe_ausgaben': bundle.inputData?.[`${keyPrefix}summe_ausgaben`],
            'summe_einnahmen': bundle.inputData?.[`${keyPrefix}summe_einnahmen`],
            'zeilen': utils.childMapping(bundle.inputData?.[`${keyPrefix}zeilen`], `${keyPrefix}zeilen`, EuerZeile),
        }
    },
}
