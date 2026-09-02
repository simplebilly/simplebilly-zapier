const utils = require('../utils/utils');
const CheckStatus = require('../models/CheckStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}errors`,
                label: `[${labelPrefix}errors]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}overall_status`,
                ...CheckStatus.fields(`${keyPrefix}overall_status`, isInput),
            },
            {
                key: `${keyPrefix}passed`,
                label: `[${labelPrefix}passed]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total_checks`,
                label: `[${labelPrefix}total_checks]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}warnings`,
                label: `[${labelPrefix}warnings]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'errors': bundle.inputData?.[`${keyPrefix}errors`],
            'overall_status': bundle.inputData?.[`${keyPrefix}overall_status`],
            'passed': bundle.inputData?.[`${keyPrefix}passed`],
            'total_checks': bundle.inputData?.[`${keyPrefix}total_checks`],
            'warnings': bundle.inputData?.[`${keyPrefix}warnings`],
        }
    },
}
