const utils = require('../utils/utils');
const ApplicationStatus = require('../models/ApplicationStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}cvFile`,
                label: `Relative path of the stored CV file under the upload dir. - [${labelPrefix}cvFile]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cvText`,
                label: `Extracted CV text, used for match-scoring. - [${labelPrefix}cvText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}matchReason`,
                label: `[${labelPrefix}matchReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}matchScore`,
                label: `0-100 LLM match score against the posting's required profile. - [${labelPrefix}matchScore]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postingId`,
                label: `References the job_posting entity. - [${labelPrefix}postingId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                label: `website | email | board - [${labelPrefix}source]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ApplicationStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'cvFile': bundle.inputData?.[`${keyPrefix}cvFile`],
            'cvText': bundle.inputData?.[`${keyPrefix}cvText`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'matchReason': bundle.inputData?.[`${keyPrefix}matchReason`],
            'matchScore': bundle.inputData?.[`${keyPrefix}matchScore`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'postingId': bundle.inputData?.[`${keyPrefix}postingId`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
