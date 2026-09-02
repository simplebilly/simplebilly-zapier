const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const EmploymentType = require('../models/EmploymentType');
const JobPostingStatus = require('../models/JobPostingStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}department`,
                label: `[${labelPrefix}department]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `What the job is; markdown/HTML. - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employmentType`,
                ...EmploymentType.fields(`${keyPrefix}employmentType`, isInput),
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remote`,
                label: `[${labelPrefix}remote]`,
                type: 'boolean',
            },
            ....fields(`${keyPrefix}requiredSkills`, isInput),
            {
                key: `${keyPrefix}requirements`,
                label: `Structured profile of the required candidate (skills, experience). - [${labelPrefix}requirements]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}salaryMax`,
                label: `[${labelPrefix}salaryMax]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}salaryMin`,
                label: `[${labelPrefix}salaryMin]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}status`,
                ...JobPostingStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'department': bundle.inputData?.[`${keyPrefix}department`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'employmentType': bundle.inputData?.[`${keyPrefix}employmentType`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'remote': bundle.inputData?.[`${keyPrefix}remote`],
            'requiredSkills': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}requiredSkills`)),
            'requirements': bundle.inputData?.[`${keyPrefix}requirements`],
            'salaryMax': bundle.inputData?.[`${keyPrefix}salaryMax`],
            'salaryMin': bundle.inputData?.[`${keyPrefix}salaryMin`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
        }
    },
}
