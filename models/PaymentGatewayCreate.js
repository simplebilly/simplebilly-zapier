const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const GatewayType = require('../models/GatewayType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}deletedAt`,
                label: `[${labelPrefix}deletedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}gatewayType`,
                ...GatewayType.fields(`${keyPrefix}gatewayType`, isInput),
            },
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'deletedAt': bundle.inputData?.[`${keyPrefix}deletedAt`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'gatewayType': bundle.inputData?.[`${keyPrefix}gatewayType`],
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
