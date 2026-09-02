const utils = require('../utils/utils');
const GdprActivity = require('../models/GdprActivity');
const GdprApiKey = require('../models/GdprApiKey');
const GdprBillingInfo = require('../models/GdprBillingInfo');
const GdprNotification = require('../models/GdprNotification');
const GdprRefreshToken = require('../models/GdprRefreshToken');
const GdprTenant = require('../models/GdprTenant');
const GdprUsageEvent = require('../models/GdprUsageEvent');
const GdprUser = require('../models/GdprUser');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}activityLog`,
                label: `[${labelPrefix}activityLog]`,
                children: GdprActivity.fields(`${keyPrefix}activityLog${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}apiKeys`,
                label: `[${labelPrefix}apiKeys]`,
                children: GdprApiKey.fields(`${keyPrefix}apiKeys${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}billing`,
                label: `[${labelPrefix}billing]`,
                children: GdprBillingInfo.fields(`${keyPrefix}billing${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}exportedAt`,
                label: `[${labelPrefix}exportedAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}generatedByAi`,
                label: `Honesty field: this document is a plain data dump, never AI-generated. - [${labelPrefix}generatedByAi]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}notifications`,
                label: `[${labelPrefix}notifications]`,
                children: GdprNotification.fields(`${keyPrefix}notifications${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}refreshTokens`,
                label: `[${labelPrefix}refreshTokens]`,
                children: GdprRefreshToken.fields(`${keyPrefix}refreshTokens${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}tenants`,
                label: `[${labelPrefix}tenants]`,
                children: GdprTenant.fields(`${keyPrefix}tenants${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}usageEvents`,
                label: `[${labelPrefix}usageEvents]`,
                children: GdprUsageEvent.fields(`${keyPrefix}usageEvents${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...GdprUser.fields(`${keyPrefix}user`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'activityLog': utils.childMapping(bundle.inputData?.[`${keyPrefix}activityLog`], `${keyPrefix}activityLog`, GdprActivity),
            'apiKeys': utils.childMapping(bundle.inputData?.[`${keyPrefix}apiKeys`], `${keyPrefix}apiKeys`, GdprApiKey),
            'billing': utils.childMapping(bundle.inputData?.[`${keyPrefix}billing`], `${keyPrefix}billing`, GdprBillingInfo),
            'exportedAt': bundle.inputData?.[`${keyPrefix}exportedAt`],
            'generatedByAi': bundle.inputData?.[`${keyPrefix}generatedByAi`],
            'notifications': utils.childMapping(bundle.inputData?.[`${keyPrefix}notifications`], `${keyPrefix}notifications`, GdprNotification),
            'refreshTokens': utils.childMapping(bundle.inputData?.[`${keyPrefix}refreshTokens`], `${keyPrefix}refreshTokens`, GdprRefreshToken),
            'tenants': utils.childMapping(bundle.inputData?.[`${keyPrefix}tenants`], `${keyPrefix}tenants`, GdprTenant),
            'usageEvents': utils.childMapping(bundle.inputData?.[`${keyPrefix}usageEvents`], `${keyPrefix}usageEvents`, GdprUsageEvent),
            'user': utils.removeIfEmpty(GdprUser.mapping(bundle, `${keyPrefix}user`)),
        }
    },
}
