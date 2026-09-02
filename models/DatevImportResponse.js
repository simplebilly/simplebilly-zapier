const utils = require('../utils/utils');
const DatevImportRow = require('../models/DatevImportRow');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}count`,
                label: `[${labelPrefix}count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}filename`,
                label: `[${labelPrefix}filename]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}rows`,
                label: `[${labelPrefix}rows]`,
                children: DatevImportRow.fields(`${keyPrefix}rows${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'count': bundle.inputData?.[`${keyPrefix}count`],
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
            'rows': utils.childMapping(bundle.inputData?.[`${keyPrefix}rows`], `${keyPrefix}rows`, DatevImportRow),
        }
    },
}
