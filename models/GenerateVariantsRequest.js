const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}options`,
                label: `Option name → list of values, e.g. `{\"Color\": [\"Red\", \"Blue\"], \"Size\": [\"S\", \"M\"]}`. The cartesian product of these lists is generated. - [${labelPrefix}options]`,
                dict: true,
            },
            {
                key: `${keyPrefix}priceDelta`,
                label: `Optional per-variant price delta applied to every generated variant. - [${labelPrefix}priceDelta]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productId`,
                label: `[${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}skuPrefix`,
                label: `Optional prefix for the generated SKUs (suffix is the option values joined by `-`). Falls back to the parent product's SKU. - [${labelPrefix}skuPrefix]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'options': bundle.inputData?.[`${keyPrefix}options`],
            'priceDelta': bundle.inputData?.[`${keyPrefix}priceDelta`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'skuPrefix': bundle.inputData?.[`${keyPrefix}skuPrefix`],
        }
    },
}
