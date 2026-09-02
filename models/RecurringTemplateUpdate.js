const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const ExecutionStatus = require('../models/ExecutionStatus');
const RecurringTemplateType = require('../models/RecurringTemplateType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}executionInterval`,
                label: `[${labelPrefix}executionInterval]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}executionStatus`,
                ...ExecutionStatus.fields(`${keyPrefix}executionStatus`, isInput),
            },
            {
                key: `${keyPrefix}finalize`,
                label: `[${labelPrefix}finalize]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}lastExecutedAt`,
                label: `[${labelPrefix}lastExecutedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nextExecutionAt`,
                label: `[${labelPrefix}nextExecutionAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}templateType`,
                ...RecurringTemplateType.fields(`${keyPrefix}templateType`, isInput),
            },
            ....fields(`${keyPrefix}voucherData`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'executionInterval': bundle.inputData?.[`${keyPrefix}executionInterval`],
            'executionStatus': bundle.inputData?.[`${keyPrefix}executionStatus`],
            'finalize': bundle.inputData?.[`${keyPrefix}finalize`],
            'lastExecutedAt': bundle.inputData?.[`${keyPrefix}lastExecutedAt`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'nextExecutionAt': bundle.inputData?.[`${keyPrefix}nextExecutionAt`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'templateType': bundle.inputData?.[`${keyPrefix}templateType`],
            'voucherData': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}voucherData`)),
        }
    },
}
