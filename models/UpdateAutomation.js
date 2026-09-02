const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
        }
    },
}
