const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}article_number`,
                label: `[${labelPrefix}article_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_amount`,
                label: `[${labelPrefix}discount_amount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_percentage`,
                label: `[${labelPrefix}discount_percentage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}input_vat_deductible`,
                label: `[${labelPrefix}input_vat_deductible]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}input_vat_rate`,
                label: `[${labelPrefix}input_vat_rate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_intra_community_acquisition`,
                label: `[${labelPrefix}is_intra_community_acquisition]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_margin_25a`,
                label: `[${labelPrefix}is_margin_25a]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ledger_account`,
                label: `[${labelPrefix}ledger_account]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}line_total`,
                label: `[${labelPrefix}line_total]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}line_total_gross`,
                label: `[${labelPrefix}line_total_gross]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}margin_25a_purchase_price`,
                label: `[${labelPrefix}margin_25a_purchase_price]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}meter_point_id`,
                label: `[${labelPrefix}meter_point_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}position`,
                label: `[${labelPrefix}position]`,
                required: true,
                type: 'number',
            },
            ....fields(`${keyPrefix}price_components`, isInput),
            {
                key: `${keyPrefix}product_id`,
                label: `[${labelPrefix}product_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}product_sku`,
                label: `[${labelPrefix}product_sku]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplier_article_number`,
                label: `[${labelPrefix}supplier_article_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_rate`,
                label: `[${labelPrefix}tax_rate]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}unit`, isInput),
            {
                key: `${keyPrefix}unit_price`,
                label: `[${labelPrefix}unit_price]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}usage_data_id`,
                label: `[${labelPrefix}usage_data_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_rate_nominal`,
                label: `[${labelPrefix}vat_rate_nominal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_special_case`,
                label: `[${labelPrefix}vat_special_case]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'article_number': bundle.inputData?.[`${keyPrefix}article_number`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'discount_amount': bundle.inputData?.[`${keyPrefix}discount_amount`],
            'discount_percentage': bundle.inputData?.[`${keyPrefix}discount_percentage`],
            'input_vat_deductible': bundle.inputData?.[`${keyPrefix}input_vat_deductible`],
            'input_vat_rate': bundle.inputData?.[`${keyPrefix}input_vat_rate`],
            'is_intra_community_acquisition': bundle.inputData?.[`${keyPrefix}is_intra_community_acquisition`],
            'is_margin_25a': bundle.inputData?.[`${keyPrefix}is_margin_25a`],
            'ledger_account': bundle.inputData?.[`${keyPrefix}ledger_account`],
            'line_total': bundle.inputData?.[`${keyPrefix}line_total`],
            'line_total_gross': bundle.inputData?.[`${keyPrefix}line_total_gross`],
            'margin_25a_purchase_price': bundle.inputData?.[`${keyPrefix}margin_25a_purchase_price`],
            'meter_point_id': bundle.inputData?.[`${keyPrefix}meter_point_id`],
            'position': bundle.inputData?.[`${keyPrefix}position`],
            'price_components': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}price_components`)),
            'product_id': bundle.inputData?.[`${keyPrefix}product_id`],
            'product_sku': bundle.inputData?.[`${keyPrefix}product_sku`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'supplier_article_number': bundle.inputData?.[`${keyPrefix}supplier_article_number`],
            'tax_rate': bundle.inputData?.[`${keyPrefix}tax_rate`],
            'unit': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}unit`)),
            'unit_price': bundle.inputData?.[`${keyPrefix}unit_price`],
            'usage_data_id': bundle.inputData?.[`${keyPrefix}usage_data_id`],
            'vat_rate_nominal': bundle.inputData?.[`${keyPrefix}vat_rate_nominal`],
            'vat_special_case': bundle.inputData?.[`${keyPrefix}vat_special_case`],
        }
    },
}
