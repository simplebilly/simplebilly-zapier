const utils = require('../utils/utils');
const ApiResponse_Team_data = require('../models/ApiResponse_Team_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                children: ApiResponse_Team_data.fields(`${keyPrefix}data${!isInput ? '[]' : ''}`, isInput, true), 
            },
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
            'data': utils.childMapping(bundle.inputData?.[`${keyPrefix}data`], `${keyPrefix}data`, ApiResponse_Team_data),
            'error': bundle.inputData?.[`${keyPrefix}error`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
        }
    },
}
