const utils = require('../utils/utils');
const CustomerCommunication = require('../models/CustomerCommunication');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}inboundCount`,
                label: `[${labelPrefix}inboundCount]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                children: CustomerCommunication.fields(`${keyPrefix}items${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}outboundCount`,
                label: `[${labelPrefix}outboundCount]`,
                required: true,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'inboundCount': bundle.inputData?.[`${keyPrefix}inboundCount`],
            'items': utils.childMapping(bundle.inputData?.[`${keyPrefix}items`], `${keyPrefix}items`, CustomerCommunication),
            'outboundCount': bundle.inputData?.[`${keyPrefix}outboundCount`],
        }
    },
}
