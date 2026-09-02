const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const SupportChannelType = require('../models/SupportChannelType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}channelType`,
                ...SupportChannelType.fields(`${keyPrefix}channelType`, isInput),
            },
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'channelType': bundle.inputData?.[`${keyPrefix}channelType`],
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
