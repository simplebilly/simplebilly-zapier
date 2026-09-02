const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}currency`,
                label: `Currency for the minimum order value. - [${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryTerms`,
                label: `Incoterms, e.g. \"EXW\", \"DAP\". - [${labelPrefix}deliveryTerms]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}earlyPaymentDiscountPercent`,
                label: `Early-payment discount percentage (Skonto), e.g. 2.0. - [${labelPrefix}earlyPaymentDiscountPercent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isDefault`,
                label: `Is this the default condition for the supplier? - [${labelPrefix}isDefault]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}minimumOrderValue`,
                label: `Minimum order value required for this supplier. - [${labelPrefix}minimumOrderValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentDueDays`,
                label: `Number of days within which payment is due. - [${labelPrefix}paymentDueDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}paymentTerms`,
                label: `Payment terms, e.g. \"14 Tage, 2% Skonto\". - [${labelPrefix}paymentTerms]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierContactId`,
                label: `The supplier this condition applies to (`contact_id`). References the supplier entity. - [${labelPrefix}supplierContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierName`,
                label: `The name of the supplier, denormalized for easy listing. - [${labelPrefix}supplierName]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}volumeDiscountTiers`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'deliveryTerms': bundle.inputData?.[`${keyPrefix}deliveryTerms`],
            'earlyPaymentDiscountPercent': bundle.inputData?.[`${keyPrefix}earlyPaymentDiscountPercent`],
            'isDefault': bundle.inputData?.[`${keyPrefix}isDefault`],
            'minimumOrderValue': bundle.inputData?.[`${keyPrefix}minimumOrderValue`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'paymentDueDays': bundle.inputData?.[`${keyPrefix}paymentDueDays`],
            'paymentTerms': bundle.inputData?.[`${keyPrefix}paymentTerms`],
            'supplierContactId': bundle.inputData?.[`${keyPrefix}supplierContactId`],
            'supplierName': bundle.inputData?.[`${keyPrefix}supplierName`],
            'volumeDiscountTiers': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}volumeDiscountTiers`)),
        }
    },
}
