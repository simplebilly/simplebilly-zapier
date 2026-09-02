const utils = require('../utils/utils');
const EuerZeileDetail = require('../models/EuerZeileDetail');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}zeilen`,
                label: `[${labelPrefix}zeilen]`,
                children: EuerZeileDetail.fields(`${keyPrefix}zeilen${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'zeilen': utils.childMapping(bundle.inputData?.[`${keyPrefix}zeilen`], `${keyPrefix}zeilen`, EuerZeileDetail),
        }
    },
}
