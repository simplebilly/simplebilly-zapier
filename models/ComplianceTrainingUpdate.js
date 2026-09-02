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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
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
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'passScore': bundle.inputData?.[`${keyPrefix}passScore`],
            'pluginPlatform': bundle.inputData?.[`${keyPrefix}pluginPlatform`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'validityMonths': bundle.inputData?.[`${keyPrefix}validityMonths`],
        }
    },
}
