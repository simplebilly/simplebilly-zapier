const utils = require('../utils/utils');
const InstituteType = require('../models/InstituteType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instituteType`,
                ...InstituteType.fields(`${keyPrefix}instituteType`, isInput),
            },
            {
                key: `${keyPrefix}kapitalmarktorientiert`,
                label: `Kapitalmarktorientierung (§ 325 Abs. 4 HGB): Offenlegungsfrist 4 statt 12 Monate. - [${labelPrefix}kapitalmarktorientiert]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'instituteType': bundle.inputData?.[`${keyPrefix}instituteType`],
            'kapitalmarktorientiert': bundle.inputData?.[`${keyPrefix}kapitalmarktorientiert`],
        }
    },
}
