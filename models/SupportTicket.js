const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const SupportChannelType = require('../models/SupportChannelType');
const SupportTicketStatus = require('../models/SupportTicketStatus');
const TicketPriority = require('../models/TicketPriority');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assignedTo`,
                label: `[${labelPrefix}assignedTo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}channelId`,
                label: `[${labelPrefix}channelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}channelType`,
                ...SupportChannelType.fields(`${keyPrefix}channelType`, isInput),
            },
            {
                key: `${keyPrefix}closedAt`,
                label: `[${labelPrefix}closedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerEmail`,
                label: `[${labelPrefix}customerEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerName`,
                label: `[${labelPrefix}customerName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalId`,
                label: `[${labelPrefix}externalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstMessageAt`,
                label: `[${labelPrefix}firstMessageAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastMessageAt`,
                label: `[${labelPrefix}lastMessageAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}leadId`,
                label: `References the lead entity. - [${labelPrefix}leadId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}messageCount`,
                label: `[${labelPrefix}messageCount]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}orderRef`,
                label: `[${labelPrefix}orderRef]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priority`,
                ...TicketPriority.fields(`${keyPrefix}priority`, isInput),
            },
            {
                key: `${keyPrefix}resolution`,
                label: `[${labelPrefix}resolution]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...SupportTicketStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                required: true,
                type: 'string',
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
            'assignedTo': bundle.inputData?.[`${keyPrefix}assignedTo`],
            'channelId': bundle.inputData?.[`${keyPrefix}channelId`],
            'channelType': bundle.inputData?.[`${keyPrefix}channelType`],
            'closedAt': bundle.inputData?.[`${keyPrefix}closedAt`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'customerEmail': bundle.inputData?.[`${keyPrefix}customerEmail`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'customerName': bundle.inputData?.[`${keyPrefix}customerName`],
            'externalId': bundle.inputData?.[`${keyPrefix}externalId`],
            'firstMessageAt': bundle.inputData?.[`${keyPrefix}firstMessageAt`],
            'lastMessageAt': bundle.inputData?.[`${keyPrefix}lastMessageAt`],
            'leadId': bundle.inputData?.[`${keyPrefix}leadId`],
            'messageCount': bundle.inputData?.[`${keyPrefix}messageCount`],
            'orderRef': bundle.inputData?.[`${keyPrefix}orderRef`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
            'resolution': bundle.inputData?.[`${keyPrefix}resolution`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'tags': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}tags`)),
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
