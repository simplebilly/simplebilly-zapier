const utils = require('../utils/utils');
const BoxFit = require('../models/BoxFit');
const MethodSuitability = require('../models/MethodSuitability');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}methods`,
                label: `[${labelPrefix}methods]`,
                children: MethodSuitability.fields(`${keyPrefix}methods${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...BoxFit.fields(`${keyPrefix}recommended_box`, isInput),
            {
                key: `${keyPrefix}requires_insurance`,
                label: `[${labelPrefix}requires_insurance]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}total_value`,
                label: `[${labelPrefix}total_value]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_weight_kg`,
                label: `[${labelPrefix}total_weight_kg]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'methods': utils.childMapping(bundle.inputData?.[`${keyPrefix}methods`], `${keyPrefix}methods`, MethodSuitability),
            'recommended_box': utils.removeIfEmpty(BoxFit.mapping(bundle, `${keyPrefix}recommended_box`)),
            'requires_insurance': bundle.inputData?.[`${keyPrefix}requires_insurance`],
            'total_value': bundle.inputData?.[`${keyPrefix}total_value`],
            'total_weight_kg': bundle.inputData?.[`${keyPrefix}total_weight_kg`],
        }
    },
}
