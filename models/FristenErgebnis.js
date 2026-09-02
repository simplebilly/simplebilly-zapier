const utils = require('../utils/utils');
const FristEintrag = require('../models/FristEintrag');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}anzahl`,
                label: `[${labelPrefix}anzahl]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}fristen`,
                label: `[${labelPrefix}fristen]`,
                children: FristEintrag.fields(`${keyPrefix}fristen${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'anzahl': bundle.inputData?.[`${keyPrefix}anzahl`],
            'fristen': utils.childMapping(bundle.inputData?.[`${keyPrefix}fristen`], `${keyPrefix}fristen`, FristEintrag),
        }
    },
}
