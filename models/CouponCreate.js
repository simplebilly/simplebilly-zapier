const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const DiscountType = require('../models/DiscountType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountType`,
                ...DiscountType.fields(`${keyPrefix}discountType`, isInput),
            },
            {
                key: `${keyPrefix}discountValue`,
                label: `[${labelPrefix}discountValue]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiresAt`,
                label: `[${labelPrefix}expiresAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isCombineable`,
                label: `[${labelPrefix}isCombineable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}maxDiscountAmount`,
                label: `[${labelPrefix}maxDiscountAmount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}maxUses`,
                label: `[${labelPrefix}maxUses]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxUsesPerCustomer`,
                label: `[${labelPrefix}maxUsesPerCustomer]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}minOrderAmount`,
                label: `[${labelPrefix}minOrderAmount]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}productIds`, isInput),
            {
                key: `${keyPrefix}startsAt`,
                label: `[${labelPrefix}startsAt]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'discountType': bundle.inputData?.[`${keyPrefix}discountType`],
            'discountValue': bundle.inputData?.[`${keyPrefix}discountValue`],
            'expiresAt': bundle.inputData?.[`${keyPrefix}expiresAt`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'isCombineable': bundle.inputData?.[`${keyPrefix}isCombineable`],
            'maxDiscountAmount': bundle.inputData?.[`${keyPrefix}maxDiscountAmount`],
            'maxUses': bundle.inputData?.[`${keyPrefix}maxUses`],
            'maxUsesPerCustomer': bundle.inputData?.[`${keyPrefix}maxUsesPerCustomer`],
            'minOrderAmount': bundle.inputData?.[`${keyPrefix}minOrderAmount`],
            'productIds': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}productIds`)),
            'startsAt': bundle.inputData?.[`${keyPrefix}startsAt`],
        }
    },
}
