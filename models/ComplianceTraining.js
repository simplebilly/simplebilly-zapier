const utils = require('../utils/utils');
const TrainingSource = require('../models/TrainingSource');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assignable`,
                label: `Whether HR can assign this training as required for employees. - [${labelPrefix}assignable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}code`,
                label: `Stable code used by plugins and frontend players (e.g. \"data_privacy\"). - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deletedAt`,
                label: `[${labelPrefix}deletedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}passScore`,
                label: `Minimum score (0–100) required to pass. - [${labelPrefix}passScore]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}pluginPlatform`,
                label: `Marketplace plugin platform id when source = Plugin. - [${labelPrefix}pluginPlatform]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                ...TrainingSource.fields(`${keyPrefix}source`, isInput),
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validityMonths`,
                label: `Certificate validity in months; null = no expiry. - [${labelPrefix}validityMonths]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assignable': bundle.inputData?.[`${keyPrefix}assignable`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'deletedAt': bundle.inputData?.[`${keyPrefix}deletedAt`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'passScore': bundle.inputData?.[`${keyPrefix}passScore`],
            'pluginPlatform': bundle.inputData?.[`${keyPrefix}pluginPlatform`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
            'validityMonths': bundle.inputData?.[`${keyPrefix}validityMonths`],
        }
    },
}
