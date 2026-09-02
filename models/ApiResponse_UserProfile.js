const utils = require('../utils/utils');
const ApiResponse_UserProfile_data = require('../models/ApiResponse_UserProfile_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ApiResponse_UserProfile_data.fields(`${keyPrefix}data`, isInput),
            {
                key: `${keyPrefix}error`,
                label: `[${labelPrefix}error]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(ApiResponse_UserProfile_data.mapping(bundle, `${keyPrefix}data`)),
            'error': bundle.inputData?.[`${keyPrefix}error`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
        }
    },
}
