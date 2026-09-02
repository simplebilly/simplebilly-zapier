const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}api_key`,
                label: `[${labelPrefix}api_key]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}api_secret`,
                label: `[${labelPrefix}api_secret]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shop_domain`,
                label: `[${labelPrefix}shop_domain]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'api_key': bundle.inputData?.[`${keyPrefix}api_key`],
            'api_secret': bundle.inputData?.[`${keyPrefix}api_secret`],
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'shop_domain': bundle.inputData?.[`${keyPrefix}shop_domain`],
        }
    },
}
