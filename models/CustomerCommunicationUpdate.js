const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CommunicationChannel = require('../models/CommunicationChannel');
const CommunicationDirection = require('../models/CommunicationDirection');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}body`,
                label: `The message body, call summary or note text. - [${labelPrefix}body]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}channel`,
                ...CommunicationChannel.fields(`${keyPrefix}channel`, isInput),
            },
            {
                key: `${keyPrefix}contactId`,
                label: `The contact (customer/supplier) this communication belongs to. References the contact entity. - [${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}counterparty`,
                label: `Email/phone of the counterparty, if applicable. - [${labelPrefix}counterparty]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}direction`,
                ...CommunicationDirection.fields(`${keyPrefix}direction`, isInput),
            },
            {
                key: `${keyPrefix}occurredAt`,
                label: `When the communication happened (defaults to now on create). - [${labelPrefix}occurredAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}tags`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'channel': bundle.inputData?.[`${keyPrefix}channel`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'counterparty': bundle.inputData?.[`${keyPrefix}counterparty`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'occurredAt': bundle.inputData?.[`${keyPrefix}occurredAt`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'tags': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}tags`)),
        }
    },
}
