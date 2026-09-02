const utils = require('../utils/utils');
const VatDetail = require('../models/VatDetail');

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
                key: `${keyPrefix}input_tax`,
                label: `[${labelPrefix}input_tax]`,
                children: VatDetail.fields(`${keyPrefix}input_tax${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}output_tax`,
                label: `[${labelPrefix}output_tax]`,
                children: VatDetail.fields(`${keyPrefix}output_tax${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_input_tax`,
                label: `[${labelPrefix}total_input_tax]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_output_tax`,
                label: `[${labelPrefix}total_output_tax]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_payable`,
                label: `[${labelPrefix}vat_payable]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_refund`,
                label: `[${labelPrefix}vat_refund]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'generated_at': bundle.inputData?.[`${keyPrefix}generated_at`],
            'input_tax': utils.childMapping(bundle.inputData?.[`${keyPrefix}input_tax`], `${keyPrefix}input_tax`, VatDetail),
            'output_tax': utils.childMapping(bundle.inputData?.[`${keyPrefix}output_tax`], `${keyPrefix}output_tax`, VatDetail),
            'period': bundle.inputData?.[`${keyPrefix}period`],
            'total_input_tax': bundle.inputData?.[`${keyPrefix}total_input_tax`],
            'total_output_tax': bundle.inputData?.[`${keyPrefix}total_output_tax`],
            'vat_payable': bundle.inputData?.[`${keyPrefix}vat_payable`],
            'vat_refund': bundle.inputData?.[`${keyPrefix}vat_refund`],
        }
    },
}
