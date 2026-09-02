const utils = require('../utils/utils');

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
            {
                key: `${keyPrefix}gateway_type`,
                label: `[${labelPrefix}gateway_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirect_uri`,
                label: `[${labelPrefix}redirect_uri]`,
                required: true,
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
            'gateway_type': bundle.inputData?.[`${keyPrefix}gateway_type`],
            'redirect_uri': bundle.inputData?.[`${keyPrefix}redirect_uri`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
        }
    },
}
