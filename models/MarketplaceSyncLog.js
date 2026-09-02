const utils = require('../utils/utils');
const SyncLogStatus = require('../models/SyncLogStatus');
const SyncType = require('../models/SyncType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}completedAt`,
                label: `[${labelPrefix}completedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}connectionId`,
                label: `References the marketplace connection entity. - [${labelPrefix}connectionId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}errorMessage`,
                label: `[${labelPrefix}errorMessage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemsFailed`,
                label: `[${labelPrefix}itemsFailed]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}itemsSynced`,
                label: `[${labelPrefix}itemsSynced]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}startedAt`,
                label: `[${labelPrefix}startedAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...SyncLogStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}syncType`,
                ...SyncType.fields(`${keyPrefix}syncType`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'completedAt': bundle.inputData?.[`${keyPrefix}completedAt`],
            'connectionId': bundle.inputData?.[`${keyPrefix}connectionId`],
            'errorMessage': bundle.inputData?.[`${keyPrefix}errorMessage`],
            'itemsFailed': bundle.inputData?.[`${keyPrefix}itemsFailed`],
            'itemsSynced': bundle.inputData?.[`${keyPrefix}itemsSynced`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'startedAt': bundle.inputData?.[`${keyPrefix}startedAt`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'syncType': bundle.inputData?.[`${keyPrefix}syncType`],
        }
    },
}
