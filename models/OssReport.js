const utils = require('../utils/utils');
const OssDependency = require('../models/OssDependency');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}dependencies`,
                label: `[${labelPrefix}dependencies]`,
                children: OssDependency.fields(`${keyPrefix}dependencies${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}total_count`,
                label: `[${labelPrefix}total_count]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dependencies': utils.childMapping(bundle.inputData?.[`${keyPrefix}dependencies`], `${keyPrefix}dependencies`, OssDependency),
            'total_count': bundle.inputData?.[`${keyPrefix}total_count`],
        }
    },
}
