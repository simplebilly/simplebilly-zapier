const utils = require('../utils/utils');

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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}employmentType`,
                label: `[${labelPrefix}employmentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remote`,
                label: `[${labelPrefix}remote]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requiredSkills`,
                label: `[${labelPrefix}requiredSkills]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}requirements`,
                label: `[${labelPrefix}requirements]`,
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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'employmentType': bundle.inputData?.[`${keyPrefix}employmentType`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'remote': bundle.inputData?.[`${keyPrefix}remote`],
            'requiredSkills': bundle.inputData?.[`${keyPrefix}requiredSkills`],
            'requirements': bundle.inputData?.[`${keyPrefix}requirements`],
            'salaryMax': bundle.inputData?.[`${keyPrefix}salaryMax`],
            'salaryMin': bundle.inputData?.[`${keyPrefix}salaryMin`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
        }
    },
}
