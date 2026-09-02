const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}error_message`,
                label: `[${labelPrefix}error_message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}items_failed`,
                label: `[${labelPrefix}items_failed]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}items_synced`,
                label: `[${labelPrefix}items_synced]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'error_message': bundle.inputData?.[`${keyPrefix}error_message`],
            'items_failed': bundle.inputData?.[`${keyPrefix}items_failed`],
            'items_synced': bundle.inputData?.[`${keyPrefix}items_synced`],
        }
    },
}
