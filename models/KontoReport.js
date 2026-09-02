const utils = require('../utils/utils');
const KontoItem = require('../models/KontoItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}generated_at`,
                label: `[${labelPrefix}generated_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}konten`,
                label: `[${labelPrefix}konten]`,
                children: KontoItem.fields(`${keyPrefix}konten${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'konten': utils.childMapping(bundle.inputData?.[`${keyPrefix}konten`], `${keyPrefix}konten`, KontoItem),
            'period': bundle.inputData?.[`${keyPrefix}period`],
        }
    },
}
