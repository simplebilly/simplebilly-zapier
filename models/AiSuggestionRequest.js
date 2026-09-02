const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instructions`,
                label: `[${labelPrefix}instructions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message_body`,
                label: `[${labelPrefix}message_body]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ticket_id`,
                label: `[${labelPrefix}ticket_id]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'message_body': bundle.inputData?.[`${keyPrefix}message_body`],
            'ticket_id': bundle.inputData?.[`${keyPrefix}ticket_id`],
        }
    },
}
