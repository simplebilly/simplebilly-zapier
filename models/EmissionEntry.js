const utils = require('../utils/utils');
const EmissionMethod = require('../models/EmissionMethod');
const GhgScope = require('../models/GhgScope');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}activityValue`,
                label: `Activity amount in `unit` (kWh, l, km, t, tkm, EUR). - [${labelPrefix}activityValue]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}categoryId`,
                label: `GHG-Protocol category key, e.g. \"purchased_goods\", \"business_travel\". - [${labelPrefix}categoryId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}efSource`,
                label: `Emission-factor source, e.g. \"UBA-2024\", \"DEFRA-2024\". - [${labelPrefix}efSource]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}efVersion`,
                label: `[${labelPrefix}efVersion]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}method`,
                ...EmissionMethod.fields(`${keyPrefix}method`, isInput),
            },
            {
                key: `${keyPrefix}scope`,
                ...GhgScope.fields(`${keyPrefix}scope`, isInput),
            },
            {
                key: `${keyPrefix}tco2e`,
                label: `Computed server-side: activity * factor / 1000, rounded to 4 dp. - [${labelPrefix}tco2e]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}unit`,
                label: `Unit of the activity value. - [${labelPrefix}unit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `Reporting year. - [${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'activityValue': bundle.inputData?.[`${keyPrefix}activityValue`],
            'categoryId': bundle.inputData?.[`${keyPrefix}categoryId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'efSource': bundle.inputData?.[`${keyPrefix}efSource`],
            'efVersion': bundle.inputData?.[`${keyPrefix}efVersion`],
            'method': bundle.inputData?.[`${keyPrefix}method`],
            'scope': bundle.inputData?.[`${keyPrefix}scope`],
            'tco2e': bundle.inputData?.[`${keyPrefix}tco2e`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
