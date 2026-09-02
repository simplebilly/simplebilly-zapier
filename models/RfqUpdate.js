const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const RfqStatus = require('../models/RfqStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requestedDate`,
                label: `[${labelPrefix}requestedDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}responseDate`,
                label: `[${labelPrefix}responseDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rfqNumber`,
                label: `[${labelPrefix}rfqNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...RfqStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}supplierContactId`,
                label: `References the supplier entity. - [${labelPrefix}supplierContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierName`,
                label: `[${labelPrefix}supplierName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'requestedDate': bundle.inputData?.[`${keyPrefix}requestedDate`],
            'responseDate': bundle.inputData?.[`${keyPrefix}responseDate`],
            'rfqNumber': bundle.inputData?.[`${keyPrefix}rfqNumber`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'supplierContactId': bundle.inputData?.[`${keyPrefix}supplierContactId`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
        }
    },
}
