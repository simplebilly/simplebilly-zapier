const utils = require('../utils/utils');
const Address = require('../models/Address');
const CartItemInput = require('../models/CartItemInput');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}customer_annual_volume`,
                label: `[${labelPrefix}customer_annual_volume]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: CartItemInput.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...Address.fields(`${keyPrefix}recipient`, isInput),
            ...Address.fields(`${keyPrefix}sender`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customer_annual_volume': bundle.inputData?.[`${keyPrefix}customer_annual_volume`],
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, CartItemInput),
            'recipient': utils.removeIfEmpty(Address.mapping(bundle, `${keyPrefix}recipient`)),
            'sender': utils.removeIfEmpty(Address.mapping(bundle, `${keyPrefix}sender`)),
        }
    },
}
