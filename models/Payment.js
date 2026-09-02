const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const PaymentMethod = require('../models/PaymentMethod');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}attachment`, isInput),
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerId`,
                label: `References the customer entity. - [${labelPrefix}customerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}metadata`, isInput),
            {
                key: `${keyPrefix}method`,
                ...PaymentMethod.fields(`${keyPrefix}method`, isInput),
            },
            {
                key: `${keyPrefix}paymentDate`,
                label: `[${labelPrefix}paymentDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reference`,
                label: `[${labelPrefix}reference]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'attachment': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}attachment`)),
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'customerId': bundle.inputData?.[`${keyPrefix}customerId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'metadata': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}metadata`)),
            'method': bundle.inputData?.[`${keyPrefix}method`],
            'paymentDate': bundle.inputData?.[`${keyPrefix}paymentDate`],
            'reference': bundle.inputData?.[`${keyPrefix}reference`],
        }
    },
}
