const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}client_id`,
                label: `OAuth 2.0 client credentials from developer.ups.com. - [${labelPrefix}client_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}client_secret`,
                label: `[${labelPrefix}client_secret]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipper_number`,
                label: `UPS account number; required for label creation, optional for rates/tracking. - [${labelPrefix}shipper_number]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'client_id': bundle.inputData?.[`${keyPrefix}client_id`],
            'client_secret': bundle.inputData?.[`${keyPrefix}client_secret`],
            'shipper_number': bundle.inputData?.[`${keyPrefix}shipper_number`],
        }
    },
}
