const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const WebhookDirection = require('../models/WebhookDirection');
const WebhookEventStatus = require('../models/WebhookEventStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}attempts`,
                label: `[${labelPrefix}attempts]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}channel`,
                label: `source for inbound, target URL for outbound. - [${labelPrefix}channel]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}direction`,
                ...WebhookDirection.fields(`${keyPrefix}direction`, isInput),
            },
            {
                key: `${keyPrefix}eventType`,
                label: `[${labelPrefix}eventType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastError`,
                label: `[${labelPrefix}lastError]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}payload`, isInput),
            {
                key: `${keyPrefix}status`,
                ...WebhookEventStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'attempts': bundle.inputData?.[`${keyPrefix}attempts`],
            'channel': bundle.inputData?.[`${keyPrefix}channel`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'eventType': bundle.inputData?.[`${keyPrefix}eventType`],
            'lastError': bundle.inputData?.[`${keyPrefix}lastError`],
            'payload': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}payload`)),
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
