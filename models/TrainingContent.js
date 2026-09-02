const utils = require('../utils/utils');
const ContactInfo = require('../models/ContactInfo');
const QuizQuestion = require('../models/QuizQuestion');
const Section = require('../models/Section');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            ...ContactInfo.fields(`${keyPrefix}contact`, isInput),
            {
                key: `${keyPrefix}passScore`,
                label: `[${labelPrefix}passScore]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}quiz`,
                label: `[${labelPrefix}quiz]`,
                children: QuizQuestion.fields(`${keyPrefix}quiz${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}sections`,
                label: `[${labelPrefix}sections]`,
                children: Section.fields(`${keyPrefix}sections${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}titleEn`,
                label: `[${labelPrefix}titleEn]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'contact': utils.removeIfEmpty(ContactInfo.mapping(bundle, `${keyPrefix}contact`)),
            'passScore': bundle.inputData?.[`${keyPrefix}passScore`],
            'quiz': utils.childMapping(bundle.inputData?.[`${keyPrefix}quiz`], `${keyPrefix}quiz`, QuizQuestion),
            'sections': utils.childMapping(bundle.inputData?.[`${keyPrefix}sections`], `${keyPrefix}sections`, Section),
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'titleEn': bundle.inputData?.[`${keyPrefix}titleEn`],
        }
    },
}
