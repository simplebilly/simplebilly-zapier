const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bis`,
                label: `[${labelPrefix}bis]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hinweis`,
                label: `[${labelPrefix}hinweis]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ist_kleinunternehmer`,
                label: `[${labelPrefix}ist_kleinunternehmer]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}kz_41`,
                label: `[${labelPrefix}kz_41]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_43`,
                label: `[${labelPrefix}kz_43]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_46`,
                label: `[${labelPrefix}kz_46]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_47`,
                label: `[${labelPrefix}kz_47]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_61`,
                label: `[${labelPrefix}kz_61]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_66`,
                label: `[${labelPrefix}kz_66]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_67`,
                label: `[${labelPrefix}kz_67]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_81`,
                label: `[${labelPrefix}kz_81]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_83`,
                label: `[${labelPrefix}kz_83]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_84`,
                label: `[${labelPrefix}kz_84]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_85`,
                label: `[${labelPrefix}kz_85]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_86`,
                label: `[${labelPrefix}kz_86]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_88`,
                label: `[${labelPrefix}kz_88]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_89`,
                label: `[${labelPrefix}kz_89]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kz_93`,
                label: `[${labelPrefix}kz_93]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}von`,
                label: `[${labelPrefix}von]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zahllast`,
                label: `[${labelPrefix}zahllast]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeitraum`,
                label: `[${labelPrefix}zeitraum]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeitraum_typ`,
                label: `[${labelPrefix}zeitraum_typ]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bis': bundle.inputData?.[`${keyPrefix}bis`],
            'hinweis': bundle.inputData?.[`${keyPrefix}hinweis`],
            'ist_kleinunternehmer': bundle.inputData?.[`${keyPrefix}ist_kleinunternehmer`],
            'kz_41': bundle.inputData?.[`${keyPrefix}kz_41`],
            'kz_43': bundle.inputData?.[`${keyPrefix}kz_43`],
            'kz_46': bundle.inputData?.[`${keyPrefix}kz_46`],
            'kz_47': bundle.inputData?.[`${keyPrefix}kz_47`],
            'kz_61': bundle.inputData?.[`${keyPrefix}kz_61`],
            'kz_66': bundle.inputData?.[`${keyPrefix}kz_66`],
            'kz_67': bundle.inputData?.[`${keyPrefix}kz_67`],
            'kz_81': bundle.inputData?.[`${keyPrefix}kz_81`],
            'kz_83': bundle.inputData?.[`${keyPrefix}kz_83`],
            'kz_84': bundle.inputData?.[`${keyPrefix}kz_84`],
            'kz_85': bundle.inputData?.[`${keyPrefix}kz_85`],
            'kz_86': bundle.inputData?.[`${keyPrefix}kz_86`],
            'kz_88': bundle.inputData?.[`${keyPrefix}kz_88`],
            'kz_89': bundle.inputData?.[`${keyPrefix}kz_89`],
            'kz_93': bundle.inputData?.[`${keyPrefix}kz_93`],
            'von': bundle.inputData?.[`${keyPrefix}von`],
            'zahllast': bundle.inputData?.[`${keyPrefix}zahllast`],
            'zeitraum': bundle.inputData?.[`${keyPrefix}zeitraum`],
            'zeitraum_typ': bundle.inputData?.[`${keyPrefix}zeitraum_typ`],
        }
    },
}
