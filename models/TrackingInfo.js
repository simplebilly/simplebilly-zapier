const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
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
                key: `${keyPrefix}estimated_delivery`,
                label: `[${labelPrefix}estimated_delivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}events`,
                label: `[${labelPrefix}events]`,
                children: TrackingEvent.fields(`${keyPrefix}events${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ....fields(`${keyPrefix}raw_response`, isInput),
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tracking_number`,
                label: `[${labelPrefix}tracking_number]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'carrier': bundle.inputData?.[`${keyPrefix}carrier`],
            'estimated_delivery': bundle.inputData?.[`${keyPrefix}estimated_delivery`],
            'events': utils.childMapping(bundle.inputData?.[`${keyPrefix}events`], `${keyPrefix}events`, TrackingEvent),
            'raw_response': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}raw_response`)),
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tracking_number': bundle.inputData?.[`${keyPrefix}tracking_number`],
        }
    },
}
