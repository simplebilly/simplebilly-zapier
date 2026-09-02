const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}connection_id`,
                label: `[${labelPrefix}connection_id]`,
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
            {
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'shop_domain': bundle.inputData?.[`${keyPrefix}shop_domain`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
        }
    },
}
