const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const InventoryCountStatus = require('../models/InventoryCountStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}countDate`,
                label: `[${labelPrefix}countDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countNumber`,
                label: `[${labelPrefix}countNumber]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}lineItems`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...InventoryCountStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `References the warehouse entity. - [${labelPrefix}warehouseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'countDate': bundle.inputData?.[`${keyPrefix}countDate`],
            'countNumber': bundle.inputData?.[`${keyPrefix}countNumber`],
            'lineItems': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}lineItems`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
        }
    },
}
