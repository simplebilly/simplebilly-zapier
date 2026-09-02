const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const StockTransferStatus = require('../models/StockTransferStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceWarehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}sourceWarehouseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...StockTransferStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}targetWarehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}targetWarehouseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}transferDate`,
                label: `[${labelPrefix}transferDate]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}transferNumber`,
                label: `[${labelPrefix}transferNumber]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'sourceWarehouseId': bundle.inputData?.[`${keyPrefix}sourceWarehouseId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'targetWarehouseId': bundle.inputData?.[`${keyPrefix}targetWarehouseId`],
            'transferDate': bundle.inputData?.[`${keyPrefix}transferDate`],
            'transferNumber': bundle.inputData?.[`${keyPrefix}transferNumber`],
        }
    },
}
