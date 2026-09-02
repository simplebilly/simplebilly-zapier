const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirect_uri`,
                label: `[${labelPrefix}redirect_uri]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'redirect_uri': bundle.inputData?.[`${keyPrefix}redirect_uri`],
        }
    },
}
