const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const JobStatus = require('../models/JobStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}attempts`,
                label: `[${labelPrefix}attempts]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}jobType`,
                label: `Discriminator the worker dispatches on (e.g. \"webhook.deliver\"). - [${labelPrefix}jobType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}maxAttempts`,
                label: `[${labelPrefix}maxAttempts]`,
                required: true,
                type: 'integer',
            },
            ....fields(`${keyPrefix}payload`, isInput),
            {
                key: `${keyPrefix}runAt`,
                label: `Earliest execution time; None = run now. - [${labelPrefix}runAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...JobStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'attempts': bundle.inputData?.[`${keyPrefix}attempts`],
            'jobType': bundle.inputData?.[`${keyPrefix}jobType`],
            'maxAttempts': bundle.inputData?.[`${keyPrefix}maxAttempts`],
            'payload': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}payload`)),
            'runAt': bundle.inputData?.[`${keyPrefix}runAt`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
