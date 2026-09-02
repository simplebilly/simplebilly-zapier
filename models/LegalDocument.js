const utils = require('../utils/utils');
const LanguageCode = require('../models/LanguageCode');
const LegalDocType = require('../models/LegalDocType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}content`,
                label: `Plain text, `\\n\\n` separates paragraphs. - [${labelPrefix}content]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}docType`,
                ...LegalDocType.fields(`${keyPrefix}docType`, isInput),
            },
            {
                key: `${keyPrefix}lang`,
                ...LanguageCode.fields(`${keyPrefix}lang`, isInput),
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'docType': bundle.inputData?.[`${keyPrefix}docType`],
            'lang': bundle.inputData?.[`${keyPrefix}lang`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
        }
    },
}
