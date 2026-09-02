const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const MessageDirection = require('../models/MessageDirection');
const MessageType = require('../models/MessageType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}authorEmail`,
                label: `[${labelPrefix}authorEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorName`,
                label: `[${labelPrefix}authorName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyHtml`,
                label: `[${labelPrefix}bodyHtml]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}channelId`,
                label: `[${labelPrefix}channelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}direction`,
                ...MessageDirection.fields(`${keyPrefix}direction`, isInput),
            },
            {
                key: `${keyPrefix}externalId`,
                label: `[${labelPrefix}externalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isInternal`,
                label: `[${labelPrefix}isInternal]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}messageType`,
                ...MessageType.fields(`${keyPrefix}messageType`, isInput),
            },
            ....fields(`${keyPrefix}metadata`, isInput),
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ticketId`,
                label: `References the ticket entity. - [${labelPrefix}ticketId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'authorEmail': bundle.inputData?.[`${keyPrefix}authorEmail`],
            'authorName': bundle.inputData?.[`${keyPrefix}authorName`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'channelId': bundle.inputData?.[`${keyPrefix}channelId`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'externalId': bundle.inputData?.[`${keyPrefix}externalId`],
            'isInternal': bundle.inputData?.[`${keyPrefix}isInternal`],
            'messageType': bundle.inputData?.[`${keyPrefix}messageType`],
            'metadata': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}metadata`)),
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'ticketId': bundle.inputData?.[`${keyPrefix}ticketId`],
        }
    },
}
