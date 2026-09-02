const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}batchNumber`,
                label: `Batch/lot number (Chargennummer) — `None` for non-batched goods. - [${labelPrefix}batchNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}binLocation`,
                label: `[${labelPrefix}binLocation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiryDate`,
                label: `Expiry date for batch-tracked goods. - [${labelPrefix}expiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            ....fields(`${keyPrefix}serialNumbers`, isInput),
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                required: true,
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
            'serialNumbers': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}serialNumbers`)),
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
