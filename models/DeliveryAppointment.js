const utils = require('../utils/utils');
const DeliveryAppointmentStatus = require('../models/DeliveryAppointmentStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
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
                key: `${keyPrefix}requestedDate`,
                label: `[${labelPrefix}requestedDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...DeliveryAppointmentStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}supplierName`,
                label: `[${labelPrefix}supplierName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}timeSlot`,
                label: `e.g. \"08:00-10:00\" - [${labelPrefix}timeSlot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}warehouseId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'requestedDate': bundle.inputData?.[`${keyPrefix}requestedDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'timeSlot': bundle.inputData?.[`${keyPrefix}timeSlot`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
