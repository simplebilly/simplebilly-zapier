const utils = require('../utils/utils');
const KostenEintrag = require('../models/KostenEintrag');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}eintraege`,
                label: `[${labelPrefix}eintraege]`,
                children: KostenEintrag.fields(`${keyPrefix}eintraege${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}gesamt`,
                label: `[${labelPrefix}gesamt]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'eintraege': utils.childMapping(bundle.inputData?.[`${keyPrefix}eintraege`], `${keyPrefix}eintraege`, KostenEintrag),
            'gesamt': bundle.inputData?.[`${keyPrefix}gesamt`],
        }
    },
}
