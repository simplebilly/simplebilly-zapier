const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}debtor_bic`,
                label: `[${labelPrefix}debtor_bic]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debtor_iban`,
                label: `[${labelPrefix}debtor_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debtor_name`,
                label: `[${labelPrefix}debtor_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}execution_date`,
                label: `[${labelPrefix}execution_date]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'debtor_bic': bundle.inputData?.[`${keyPrefix}debtor_bic`],
            'debtor_iban': bundle.inputData?.[`${keyPrefix}debtor_iban`],
            'debtor_name': bundle.inputData?.[`${keyPrefix}debtor_name`],
            'execution_date': bundle.inputData?.[`${keyPrefix}execution_date`],
        }
    },
}
