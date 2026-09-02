const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}createdAt`,
                label: `[${labelPrefix}createdAt]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}items`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `[${labelPrefix}orderNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}returnNumber`,
                label: `[${labelPrefix}returnNumber]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}returnOrderId`,
                label: `[${labelPrefix}returnOrderId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updatedAt`,
                label: `[${labelPrefix}updatedAt]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'createdAt': bundle.inputData?.[`${keyPrefix}createdAt`],
            'items': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}items`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'returnNumber': bundle.inputData?.[`${keyPrefix}returnNumber`],
            'returnOrderId': bundle.inputData?.[`${keyPrefix}returnOrderId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'updatedAt': bundle.inputData?.[`${keyPrefix}updatedAt`],
        }
    },
}
