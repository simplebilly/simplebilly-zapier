const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const EmailTemplateStatus = require('../models/EmailTemplateStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}body`,
                label: `E-mail body with optional placeholders. - [${labelPrefix}body]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Human-readable template name, e.g. \"Follow-up after quote\". - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...EmailTemplateStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}subject`,
                label: `E-mail subject line with optional placeholders. - [${labelPrefix}subject]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}variables`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'variables': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}variables`)),
        }
    },
}
