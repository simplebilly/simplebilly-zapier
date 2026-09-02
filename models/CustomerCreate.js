const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}address`, isInput),
            {
                key: `${keyPrefix}contactPerson`,
                label: `[${labelPrefix}contactPerson]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalOrderNumber`,
                label: `[${labelPrefix}externalOrderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentGracePeriodDays`,
                label: `[${labelPrefix}paymentGracePeriodDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vatId`,
                label: `[${labelPrefix}vatId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}address`)),
            'contactPerson': bundle.inputData?.[`${keyPrefix}contactPerson`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'externalOrderNumber': bundle.inputData?.[`${keyPrefix}externalOrderNumber`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'paymentGracePeriodDays': bundle.inputData?.[`${keyPrefix}paymentGracePeriodDays`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'vatId': bundle.inputData?.[`${keyPrefix}vatId`],
        }
    },
}
