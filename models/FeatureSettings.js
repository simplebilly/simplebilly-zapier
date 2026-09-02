const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}onlineshop`,
                label: `Online shop / storefront module (default: enabled). - [${labelPrefix}onlineshop]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportBilanz`,
                label: `Bilanz (balance sheet) report. - [${labelPrefix}reportBilanz]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportBwa`,
                label: `BWA (betriebswirtschaftliche Auswertung). - [${labelPrefix}reportBwa]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportEuer`,
                label: `EÜR (Einnahmen-Überschuss-Rechnung). - [${labelPrefix}reportEuer]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportGewerbesteuer`,
                label: `Gewerbesteuer report. - [${labelPrefix}reportGewerbesteuer]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportGuv`,
                label: `GuV (profit & loss) report. - [${labelPrefix}reportGuv]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportKst`,
                label: `KSt (Körperschaftsteuer) report. - [${labelPrefix}reportKst]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reportUstva`,
                label: `UStVA (Umsatzsteuervoranmeldung). - [${labelPrefix}reportUstva]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'onlineshop': bundle.inputData?.[`${keyPrefix}onlineshop`],
            'reportBilanz': bundle.inputData?.[`${keyPrefix}reportBilanz`],
            'reportBwa': bundle.inputData?.[`${keyPrefix}reportBwa`],
            'reportEuer': bundle.inputData?.[`${keyPrefix}reportEuer`],
            'reportGewerbesteuer': bundle.inputData?.[`${keyPrefix}reportGewerbesteuer`],
            'reportGuv': bundle.inputData?.[`${keyPrefix}reportGuv`],
            'reportKst': bundle.inputData?.[`${keyPrefix}reportKst`],
            'reportUstva': bundle.inputData?.[`${keyPrefix}reportUstva`],
        }
    },
}
