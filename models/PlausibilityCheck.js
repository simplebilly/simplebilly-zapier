const utils = require('../utils/utils');
const CheckStatus = require('../models/CheckStatus');
const Severity = require('../models/Severity');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}detail`,
                label: `[${labelPrefix}detail]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}severity`,
                ...Severity.fields(`${keyPrefix}severity`, isInput),
            },
            {
                key: `${keyPrefix}status`,
                ...CheckStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'detail': bundle.inputData?.[`${keyPrefix}detail`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'severity': bundle.inputData?.[`${keyPrefix}severity`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
