const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
