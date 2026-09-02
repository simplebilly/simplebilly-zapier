const utils = require('../utils/utils');
const VatItem = require('../models/VatItem');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}input_tax_items`,
                label: `[${labelPrefix}input_tax_items]`,
                children: VatItem.fields(`${keyPrefix}input_tax_items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}output_tax_items`,
                label: `[${labelPrefix}output_tax_items]`,
                children: VatItem.fields(`${keyPrefix}output_tax_items${!isInput ? '[]' : ''}`, isInput, true), 
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
                key: `${keyPrefix}vat_due`,
                label: `[${labelPrefix}vat_due]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'input_tax_items': utils.childMapping(bundle.inputData?.[`${keyPrefix}input_tax_items`], `${keyPrefix}input_tax_items`, VatItem),
            'output_tax_items': utils.childMapping(bundle.inputData?.[`${keyPrefix}output_tax_items`], `${keyPrefix}output_tax_items`, VatItem),
            'total_input_tax': bundle.inputData?.[`${keyPrefix}total_input_tax`],
            'total_output_tax': bundle.inputData?.[`${keyPrefix}total_output_tax`],
            'vat_due': bundle.inputData?.[`${keyPrefix}vat_due`],
        }
    },
}
