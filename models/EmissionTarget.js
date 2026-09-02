const utils = require('../utils/utils');
const EmissionTargetScope = require('../models/EmissionTargetScope');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}baseValue`,
                label: `[${labelPrefix}baseValue]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}baseYear`,
                label: `tCO2e in the base year (actuals). - [${labelPrefix}baseYear]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `Transition-plan narrative (ESRS E1-1 light), may be empty. - [${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}scope`,
                ...EmissionTargetScope.fields(`${keyPrefix}scope`, isInput),
            },
            {
                key: `${keyPrefix}targetValue`,
                label: `[${labelPrefix}targetValue]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}targetYear`,
                label: `tCO2e target for the target year. - [${labelPrefix}targetYear]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'baseValue': bundle.inputData?.[`${keyPrefix}baseValue`],
            'baseYear': bundle.inputData?.[`${keyPrefix}baseYear`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'scope': bundle.inputData?.[`${keyPrefix}scope`],
            'targetValue': bundle.inputData?.[`${keyPrefix}targetValue`],
            'targetYear': bundle.inputData?.[`${keyPrefix}targetYear`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
