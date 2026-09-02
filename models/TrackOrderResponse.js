const utils = require('../utils/utils');
const TrackedShipment = require('../models/TrackedShipment');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}order_number`,
                label: `[${labelPrefix}order_number]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}order_status`,
                label: `[${labelPrefix}order_status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipments`,
                label: `[${labelPrefix}shipments]`,
                children: TrackedShipment.fields(`${keyPrefix}shipments${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'order_number': bundle.inputData?.[`${keyPrefix}order_number`],
            'order_status': bundle.inputData?.[`${keyPrefix}order_status`],
            'shipments': utils.childMapping(bundle.inputData?.[`${keyPrefix}shipments`], `${keyPrefix}shipments`, TrackedShipment),
        }
    },
}
