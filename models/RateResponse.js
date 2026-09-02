const utils = require('../utils/utils');
const ShippingRate = require('../models/ShippingRate');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}rates`,
                label: `[${labelPrefix}rates]`,
                children: ShippingRate.fields(`${keyPrefix}rates${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'rates': utils.childMapping(bundle.inputData?.[`${keyPrefix}rates`], `${keyPrefix}rates`, ShippingRate),
        }
    },
}
