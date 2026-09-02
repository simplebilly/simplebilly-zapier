const utils = require('../utils/utils');
const PostingCategoryType = require('../models/PostingCategoryType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}accountNumber`,
                label: `[${labelPrefix}accountNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountNumberSkr03`,
                label: `[${labelPrefix}accountNumberSkr03]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountNumberSkr04`,
                label: `[${labelPrefix}accountNumberSkr04]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountNumberSkr49`,
                label: `[${labelPrefix}accountNumberSkr49]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}categoryType`,
                ...PostingCategoryType.fields(`${keyPrefix}categoryType`, isInput),
            },
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultVatRate`,
                label: `[${labelPrefix}defaultVatRate]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}eksCategory`,
                label: `[${labelPrefix}eksCategory]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}euVatLine`,
                label: `[${labelPrefix}euVatLine]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}inputVatPercentage`,
                label: `[${labelPrefix}inputVatPercentage]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSystem`,
                label: `[${labelPrefix}isSystem]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}skrVersion`,
                label: `[${labelPrefix}skrVersion]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userModifiedSkr03`,
                label: `[${labelPrefix}userModifiedSkr03]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}userModifiedSkr04`,
                label: `[${labelPrefix}userModifiedSkr04]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'accountNumber': bundle.inputData?.[`${keyPrefix}accountNumber`],
            'accountNumberSkr03': bundle.inputData?.[`${keyPrefix}accountNumberSkr03`],
            'accountNumberSkr04': bundle.inputData?.[`${keyPrefix}accountNumberSkr04`],
            'accountNumberSkr49': bundle.inputData?.[`${keyPrefix}accountNumberSkr49`],
            'categoryType': bundle.inputData?.[`${keyPrefix}categoryType`],
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'defaultVatRate': bundle.inputData?.[`${keyPrefix}defaultVatRate`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'eksCategory': bundle.inputData?.[`${keyPrefix}eksCategory`],
            'euVatLine': bundle.inputData?.[`${keyPrefix}euVatLine`],
            'inputVatPercentage': bundle.inputData?.[`${keyPrefix}inputVatPercentage`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'isSystem': bundle.inputData?.[`${keyPrefix}isSystem`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'skrVersion': bundle.inputData?.[`${keyPrefix}skrVersion`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
            'userModifiedSkr03': bundle.inputData?.[`${keyPrefix}userModifiedSkr03`],
            'userModifiedSkr04': bundle.inputData?.[`${keyPrefix}userModifiedSkr04`],
        }
    },
}
