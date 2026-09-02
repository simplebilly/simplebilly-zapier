const utils = require('../utils/utils');
const TimelineEvent = require('../models/TimelineEvent');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}events`,
                label: `[${labelPrefix}events]`,
                children: TimelineEvent.fields(`${keyPrefix}events${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'events': utils.childMapping(bundle.inputData?.[`${keyPrefix}events`], `${keyPrefix}events`, TimelineEvent),
        }
    },
}
