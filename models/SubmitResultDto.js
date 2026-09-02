const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}answers`,
                label: `Selected answer indices (required for scored builtin trainings). - [${labelPrefix}answers]`,
                required: true,
                list: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}assignmentId`,
                label: `[${labelPrefix}assignmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}score`,
                label: `Score 0–100. Only trusted for plugin trainings without server-side scoring; builtin trainings are always re-scored from `answers`. - [${labelPrefix}score]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}trainingCode`,
                label: `[${labelPrefix}trainingCode]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'answers': bundle.inputData?.[`${keyPrefix}answers`],
            'assignmentId': bundle.inputData?.[`${keyPrefix}assignmentId`],
            'score': bundle.inputData?.[`${keyPrefix}score`],
            'trainingCode': bundle.inputData?.[`${keyPrefix}trainingCode`],
        }
    },
}
