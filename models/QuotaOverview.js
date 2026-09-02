const utils = require('../utils/utils');
const MeteredUsage = require('../models/MeteredUsage');
const PlanFeatures = require('../models/PlanFeatures');
const PlanLimits = require('../models/PlanLimits');
const UsageSnapshot = require('../models/UsageSnapshot');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...PlanFeatures.fields(`${keyPrefix}features`, isInput),
            {
                key: `${keyPrefix}isTrialing`,
                label: `[${labelPrefix}isTrialing]`,
                required: true,
                type: 'boolean',
            },
            ...PlanLimits.fields(`${keyPrefix}limits`, isInput),
            {
                key: `${keyPrefix}metered`,
                label: `[${labelPrefix}metered]`,
                children: MeteredUsage.fields(`${keyPrefix}metered${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}plan`,
                label: `[${labelPrefix}plan]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}planName`,
                label: `[${labelPrefix}planName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}trialEndsAt`,
                label: `[${labelPrefix}trialEndsAt]`,
                type: 'string',
            },
            ...UsageSnapshot.fields(`${keyPrefix}usage`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'features': utils.removeIfEmpty(PlanFeatures.mapping(bundle, `${keyPrefix}features`)),
            'isTrialing': bundle.inputData?.[`${keyPrefix}isTrialing`],
            'limits': utils.removeIfEmpty(PlanLimits.mapping(bundle, `${keyPrefix}limits`)),
            'metered': utils.childMapping(bundle.inputData?.[`${keyPrefix}metered`], `${keyPrefix}metered`, MeteredUsage),
            'plan': bundle.inputData?.[`${keyPrefix}plan`],
            'planName': bundle.inputData?.[`${keyPrefix}planName`],
            'trialEndsAt': bundle.inputData?.[`${keyPrefix}trialEndsAt`],
            'usage': utils.removeIfEmpty(UsageSnapshot.mapping(bundle, `${keyPrefix}usage`)),
        }
    },
}
