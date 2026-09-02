const utils = require('../utils/utils');
const AssignmentStatus = require('../models/AssignmentStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assignmentId`,
                label: `[${labelPrefix}assignmentId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}certificateId`,
                label: `[${labelPrefix}certificateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dueDate`,
                label: `[${labelPrefix}dueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastScore`,
                label: `[${labelPrefix}lastScore]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}passScore`,
                label: `[${labelPrefix}passScore]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}passed`,
                label: `[${labelPrefix}passed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}status`,
                ...AssignmentStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}trainingId`,
                label: `[${labelPrefix}trainingId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}validUntil`,
                label: `[${labelPrefix}validUntil]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'assignmentId': bundle.inputData?.[`${keyPrefix}assignmentId`],
            'certificateId': bundle.inputData?.[`${keyPrefix}certificateId`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'lastScore': bundle.inputData?.[`${keyPrefix}lastScore`],
            'passScore': bundle.inputData?.[`${keyPrefix}passScore`],
            'passed': bundle.inputData?.[`${keyPrefix}passed`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'trainingId': bundle.inputData?.[`${keyPrefix}trainingId`],
            'validUntil': bundle.inputData?.[`${keyPrefix}validUntil`],
        }
    },
}
