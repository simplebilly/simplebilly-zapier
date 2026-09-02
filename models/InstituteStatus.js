const utils = require('../utils/utils');
const InstituteCheckItem = require('../models/InstituteCheckItem');
const InstituteDeadlines = require('../models/InstituteDeadlines');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}checklist`,
                label: `[${labelPrefix}checklist]`,
                children: InstituteCheckItem.fields(`${keyPrefix}checklist${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...InstituteDeadlines.fields(`${keyPrefix}deadlines`, isInput),
            {
                key: `${keyPrefix}instituteType`,
                label: `[${labelPrefix}instituteType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kapitalmarktorientiert`,
                label: `[${labelPrefix}kapitalmarktorientiert]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'checklist': utils.childMapping(bundle.inputData?.[`${keyPrefix}checklist`], `${keyPrefix}checklist`, InstituteCheckItem),
            'deadlines': utils.removeIfEmpty(InstituteDeadlines.mapping(bundle, `${keyPrefix}deadlines`)),
            'instituteType': bundle.inputData?.[`${keyPrefix}instituteType`],
            'kapitalmarktorientiert': bundle.inputData?.[`${keyPrefix}kapitalmarktorientiert`],
        }
    },
}
