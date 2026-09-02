const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}label_url`,
                label: `[${labelPrefix}label_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sscc`,
                label: `[${labelPrefix}sscc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tracking_number`,
                label: `[${labelPrefix}tracking_number]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'label_url': bundle.inputData?.[`${keyPrefix}label_url`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'sscc': bundle.inputData?.[`${keyPrefix}sscc`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
            'tracking_number': bundle.inputData?.[`${keyPrefix}tracking_number`],
        }
    },
}
