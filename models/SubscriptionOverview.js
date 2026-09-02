const utils = require('../utils/utils');
const PlanFeatures = require('../models/PlanFeatures');
const PlanLimits = require('../models/PlanLimits');
const UsageSnapshot = require('../models/UsageSnapshot');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currentPeriodEnd`,
                label: `[${labelPrefix}currentPeriodEnd]`,
                type: 'string',
            },
            ...PlanFeatures.fields(`${keyPrefix}features`, isInput),
            {
                key: `${keyPrefix}isTrialing`,
                label: `[${labelPrefix}isTrialing]`,
                required: true,
                type: 'boolean',
            },
            ...PlanLimits.fields(`${keyPrefix}limits`, isInput),
            {
                key: `${keyPrefix}manageUrl`,
                label: `[${labelPrefix}manageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}plan`,
                label: `Resolved plan id (free/starter/business/enterprise, or a custom override id). - [${labelPrefix}plan]`,
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
                key: `${keyPrefix}priceEur`,
                label: `Monthly price in EUR; `-1.0` = custom pricing (enterprise). - [${labelPrefix}priceEur]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subscriptionId`,
                label: `[${labelPrefix}subscriptionId]`,
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
            'currentPeriodEnd': bundle.inputData?.[`${keyPrefix}currentPeriodEnd`],
            'features': utils.removeIfEmpty(PlanFeatures.mapping(bundle, `${keyPrefix}features`)),
            'isTrialing': bundle.inputData?.[`${keyPrefix}isTrialing`],
            'limits': utils.removeIfEmpty(PlanLimits.mapping(bundle, `${keyPrefix}limits`)),
            'manageUrl': bundle.inputData?.[`${keyPrefix}manageUrl`],
            'plan': bundle.inputData?.[`${keyPrefix}plan`],
            'planName': bundle.inputData?.[`${keyPrefix}planName`],
            'priceEur': bundle.inputData?.[`${keyPrefix}priceEur`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subscriptionId': bundle.inputData?.[`${keyPrefix}subscriptionId`],
            'trialEndsAt': bundle.inputData?.[`${keyPrefix}trialEndsAt`],
            'usage': utils.removeIfEmpty(UsageSnapshot.mapping(bundle, `${keyPrefix}usage`)),
        }
    },
}
