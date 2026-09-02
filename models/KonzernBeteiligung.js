const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}company_name`,
                label: `[${labelPrefix}company_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}control_basis`,
                label: `Erfüllte Kontroll-Indikatoren (§ 290 Abs. 2 HGB) als deutsche Bezeichnungen. - [${labelPrefix}control_basis]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}controlled`,
                label: `[${labelPrefix}controlled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ownership_pct`,
                label: `[${labelPrefix}ownership_pct]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'company_name': bundle.inputData?.[`${keyPrefix}company_name`],
            'control_basis': bundle.inputData?.[`${keyPrefix}control_basis`],
            'controlled': bundle.inputData?.[`${keyPrefix}controlled`],
            'ownership_pct': bundle.inputData?.[`${keyPrefix}ownership_pct`],
        }
    },
}
