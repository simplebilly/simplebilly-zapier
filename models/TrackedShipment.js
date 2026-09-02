const utils = require('../utils/utils');
const TrackingEvent = require('../models/TrackingEvent');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}carrier`,
                label: `[${labelPrefix}carrier]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}events`,
                label: `[${labelPrefix}events]`,
                children: TrackingEvent.fields(`${keyPrefix}events${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}label_url`,
                label: `[${labelPrefix}label_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tracking_number`,
                label: `[${labelPrefix}tracking_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tracking_url`,
                label: `[${labelPrefix}tracking_url]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'events': utils.childMapping(bundle.inputData?.[`${keyPrefix}events`], `${keyPrefix}events`, TrackingEvent),
            'label_url': bundle.inputData?.[`${keyPrefix}label_url`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tracking_number': bundle.inputData?.[`${keyPrefix}tracking_number`],
            'tracking_url': bundle.inputData?.[`${keyPrefix}tracking_url`],
        }
    },
}
