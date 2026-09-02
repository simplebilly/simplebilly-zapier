const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const LeadStatus = require('../models/LeadStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}company`,
                label: `[${labelPrefix}company]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}convertedAt`,
                label: `[${labelPrefix}convertedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstContactAt`,
                label: `[${labelPrefix}firstContactAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}score`,
                label: `[${labelPrefix}score]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}source`,
                label: `[${labelPrefix}source]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...LeadStatus.fields(`${keyPrefix}status`, isInput),
            },
            ....fields(`${keyPrefix}tags`, isInput),
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
            'company': bundle.inputData?.[`${keyPrefix}company`],
            'convertedAt': bundle.inputData?.[`${keyPrefix}convertedAt`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'firstContactAt': bundle.inputData?.[`${keyPrefix}firstContactAt`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'score': bundle.inputData?.[`${keyPrefix}score`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tags': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}tags`)),
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
