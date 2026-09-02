const utils = require('../utils/utils');
const ServiceJobStatus = require('../models/ServiceJobStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}address`,
                label: `Street + zip + city of the job location. - [${labelPrefix}address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerEmail`,
                label: `Customer email for email notifications. - [${labelPrefix}customerEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerName`,
                label: `Denormalized customer name for quick display. - [${labelPrefix}customerName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerPhone`,
                label: `Customer phone for SMS notifications later. - [${labelPrefix}customerPhone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `What work needs to be done. - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}estimatedDurationMinutes`,
                label: `Estimated time for the job in minutes. - [${labelPrefix}estimatedDurationMinutes]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}lat`,
                label: `Latitude for map display (OpenStreetMap). - [${labelPrefix}lat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}lng`,
                label: `Longitude for map display (OpenStreetMap). - [${labelPrefix}lng]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ServiceJobStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'customerEmail': bundle.inputData?.[`${keyPrefix}customerEmail`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'customerName': bundle.inputData?.[`${keyPrefix}customerName`],
            'customerPhone': bundle.inputData?.[`${keyPrefix}customerPhone`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'estimatedDurationMinutes': bundle.inputData?.[`${keyPrefix}estimatedDurationMinutes`],
            'lat': bundle.inputData?.[`${keyPrefix}lat`],
            'lng': bundle.inputData?.[`${keyPrefix}lng`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
