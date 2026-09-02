const utils = require('../utils/utils');
const Address = require('../models/Address');
const CustomerInfo = require('../models/CustomerInfo');
const Package = require('../models/Package');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...CustomerInfo.fields(`${keyPrefix}customer`, isInput),
            {
                key: `${keyPrefix}packages`,
                label: `[${labelPrefix}packages]`,
                children: Package.fields(`${keyPrefix}packages${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...Address.fields(`${keyPrefix}recipient`, isInput),
            ...Address.fields(`${keyPrefix}sender`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'customer': utils.removeIfEmpty(CustomerInfo.mapping(bundle, `${keyPrefix}customer`)),
            'packages': utils.childMapping(bundle.inputData?.[`${keyPrefix}packages`], `${keyPrefix}packages`, Package),
            'recipient': utils.removeIfEmpty(Address.mapping(bundle, `${keyPrefix}recipient`)),
            'sender': utils.removeIfEmpty(Address.mapping(bundle, `${keyPrefix}sender`)),
        }
    },
}
