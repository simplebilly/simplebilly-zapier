const utils = require('../utils/utils');
const MovementType = require('../models/MovementType');
const ReferenceType = require('../models/ReferenceType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}delta`,
                label: `Signed movement: positive = into stock, negative = out of stock. - [${labelPrefix}delta]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}movementType`,
                ...MovementType.fields(`${keyPrefix}movementType`, isInput),
            },
            {
                key: `${keyPrefix}productId`,
                label: `References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `Absolute quantity moved (always >= 0). - [${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}referenceId`,
                label: `Primary-key of the referencing entity. - [${labelPrefix}referenceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}referenceType`,
                ...ReferenceType.fields(`${keyPrefix}referenceType`, isInput),
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}warehouseId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'delta': bundle.inputData?.[`${keyPrefix}delta`],
            'movementType': bundle.inputData?.[`${keyPrefix}movementType`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'referenceId': bundle.inputData?.[`${keyPrefix}referenceId`],
            'referenceType': bundle.inputData?.[`${keyPrefix}referenceType`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
