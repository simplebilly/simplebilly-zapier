const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}completed_at`,
                label: `[${labelPrefix}completed_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}connection_id`,
                label: `[${labelPrefix}connection_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}error_message`,
                label: `[${labelPrefix}error_message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}items_failed`,
                label: `[${labelPrefix}items_failed]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}items_synced`,
                label: `[${labelPrefix}items_synced]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}log_id`,
                label: `[${labelPrefix}log_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}started_at`,
                label: `[${labelPrefix}started_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sync_type`,
                label: `[${labelPrefix}sync_type]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'completed_at': bundle.inputData?.[`${keyPrefix}completed_at`],
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'error_message': bundle.inputData?.[`${keyPrefix}error_message`],
            'items_failed': bundle.inputData?.[`${keyPrefix}items_failed`],
            'items_synced': bundle.inputData?.[`${keyPrefix}items_synced`],
            'log_id': bundle.inputData?.[`${keyPrefix}log_id`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'started_at': bundle.inputData?.[`${keyPrefix}started_at`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'sync_type': bundle.inputData?.[`${keyPrefix}sync_type`],
        }
    },
}
