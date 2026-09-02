const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}api_key`,
                label: `DHL-API-Key from developer.dhl.com (required for tracking). - [${labelPrefix}api_key]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}client_id`,
                label: `Client credentials from the DHL developer app; required for label creation. - [${labelPrefix}client_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}client_secret`,
                label: `[${labelPrefix}client_secret]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'api_key': bundle.inputData?.[`${keyPrefix}api_key`],
            'client_id': bundle.inputData?.[`${keyPrefix}client_id`],
            'client_secret': bundle.inputData?.[`${keyPrefix}client_secret`],
        }
    },
}
