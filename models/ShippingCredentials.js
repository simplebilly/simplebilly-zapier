const utils = require('../utils/utils');
const DhlCredentials = require('../models/DhlCredentials');
const UpsCredentials = require('../models/UpsCredentials');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...DhlCredentials.fields(`${keyPrefix}dhl`, isInput),
            ...UpsCredentials.fields(`${keyPrefix}ups`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dhl': utils.removeIfEmpty(DhlCredentials.mapping(bundle, `${keyPrefix}dhl`)),
            'ups': utils.removeIfEmpty(UpsCredentials.mapping(bundle, `${keyPrefix}ups`)),
        }
    },
}
