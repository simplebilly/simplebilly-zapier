const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}channel_type`,
                label: `[${labelPrefix}channel_type]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'channel_type': bundle.inputData?.[`${keyPrefix}channel_type`],
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
