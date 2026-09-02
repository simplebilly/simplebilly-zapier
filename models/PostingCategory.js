const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}account_number`,
                label: `[${labelPrefix}account_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}account_number_skr03`,
                label: `[${labelPrefix}account_number_skr03]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}account_number_skr04`,
                label: `[${labelPrefix}account_number_skr04]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}account_number_skr49`,
                label: `[${labelPrefix}account_number_skr49]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category_id`,
                label: `[${labelPrefix}category_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}default_vat_rate`,
                label: `[${labelPrefix}default_vat_rate]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}eks_category`,
                label: `[${labelPrefix}eks_category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_system`,
                label: `[${labelPrefix}is_system]`,
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
                key: `${keyPrefix}skr_version`,
                label: `[${labelPrefix}skr_version]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account_number': bundle.inputData?.[`${keyPrefix}account_number`],
            'account_number_skr03': bundle.inputData?.[`${keyPrefix}account_number_skr03`],
            'account_number_skr04': bundle.inputData?.[`${keyPrefix}account_number_skr04`],
            'account_number_skr49': bundle.inputData?.[`${keyPrefix}account_number_skr49`],
            'category_id': bundle.inputData?.[`${keyPrefix}category_id`],
            'default_vat_rate': bundle.inputData?.[`${keyPrefix}default_vat_rate`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'eks_category': bundle.inputData?.[`${keyPrefix}eks_category`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'is_system': bundle.inputData?.[`${keyPrefix}is_system`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'skr_version': bundle.inputData?.[`${keyPrefix}skr_version`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
