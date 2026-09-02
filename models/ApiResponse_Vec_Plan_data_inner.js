const utils = require('../utils/utils');
const PlanFeatures = require('../models/PlanFeatures');
const PlanLimits = require('../models/PlanLimits');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...PlanFeatures.fields(`${keyPrefix}features`, isInput),
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            ...PlanLimits.fields(`${keyPrefix}limits`, isInput),
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceEur`,
                label: `[${labelPrefix}priceEur]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'features': utils.removeIfEmpty(PlanFeatures.mapping(bundle, `${keyPrefix}features`)),
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'limits': utils.removeIfEmpty(PlanLimits.mapping(bundle, `${keyPrefix}limits`)),
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'priceEur': bundle.inputData?.[`${keyPrefix}priceEur`],
        }
    },
}
