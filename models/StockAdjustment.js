const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}batchNumber`,
                label: `[${labelPrefix}batchNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}binLocation`,
                label: `[${labelPrefix}binLocation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiryDate`,
                label: `[${labelPrefix}expiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}serialNumbers`,
                label: `[${labelPrefix}serialNumbers]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'batchNumber': bundle.inputData?.[`${keyPrefix}batchNumber`],
            'binLocation': bundle.inputData?.[`${keyPrefix}binLocation`],
            'expiryDate': bundle.inputData?.[`${keyPrefix}expiryDate`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'serialNumbers': bundle.inputData?.[`${keyPrefix}serialNumbers`],
        }
    },
}
