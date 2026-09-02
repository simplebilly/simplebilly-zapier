const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}error`,
                label: `Set only when the job failed. - [${labelPrefix}error]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}job_id`,
                label: `[${labelPrefix}job_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}processed`,
                label: `[${labelPrefix}processed]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}progress`,
                label: `0–100 - [${labelPrefix}progress]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}provider`,
                label: `Which competitor the import came from (lexoffice | billbee); the frontend uses it to label the job. Absent for legacy jobs. - [${labelPrefix}provider]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stage`,
                label: `queued | fetching | downloading | importing | done - [${labelPrefix}stage]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `pending | running | done | failed - [${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total`,
                label: `[${labelPrefix}total]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'error': bundle.inputData?.[`${keyPrefix}error`],
            'job_id': bundle.inputData?.[`${keyPrefix}job_id`],
            'processed': bundle.inputData?.[`${keyPrefix}processed`],
            'progress': bundle.inputData?.[`${keyPrefix}progress`],
            'provider': bundle.inputData?.[`${keyPrefix}provider`],
            'stage': bundle.inputData?.[`${keyPrefix}stage`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'total': bundle.inputData?.[`${keyPrefix}total`],
        }
    },
}
