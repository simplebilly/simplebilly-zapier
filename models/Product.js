const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}availability`,
                label: `[${labelPrefix}availability]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}barcode`,
                label: `[${labelPrefix}barcode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}brand`,
                label: `[${labelPrefix}brand]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}categoryId`,
                label: `[${labelPrefix}categoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}condition`,
                label: `[${labelPrefix}condition]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultLedgerAccount`,
                label: `[${labelPrefix}defaultLedgerAccount]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultPrice`,
                label: `[${labelPrefix}defaultPrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultPriceFormulaId`,
                label: `References the price formula entity. - [${labelPrefix}defaultPriceFormulaId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultTaxRate`,
                label: `[${labelPrefix}defaultTaxRate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gtin`,
                label: `[${labelPrefix}gtin]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}height`,
                label: `[${labelPrefix}height]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageLink`,
                label: `[${labelPrefix}imageLink]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}images`, isInput),
            {
                key: `${keyPrefix}isTaxable`,
                label: `[${labelPrefix}isTaxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}length`,
                label: `[${labelPrefix}length]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}link`,
                label: `[${labelPrefix}link]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}maxStock`,
                label: `Target stock level used by reorder proposals. - [${labelPrefix}maxStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}minStock`,
                label: `Reorder point — when stock falls below this, a reorder is suggested. - [${labelPrefix}minStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}mpn`,
                label: `[${labelPrefix}mpn]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}packageHeight`,
                label: `[${labelPrefix}packageHeight]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}packageLength`,
                label: `[${labelPrefix}packageLength]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}packageWeightUnit`,
                label: `[${labelPrefix}packageWeightUnit]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}packageWeightValue`,
                label: `[${labelPrefix}packageWeightValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}packageWidth`,
                label: `[${labelPrefix}packageWidth]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productCode`,
                label: `[${labelPrefix}productCode]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}productType`,
                label: `[${labelPrefix}productType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchasePrice`,
                label: `[${labelPrefix}purchasePrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reorderQuantity`,
                label: `Suggested purchase quantity when a reorder proposal is created. - [${labelPrefix}reorderQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}salePrice`,
                label: `[${labelPrefix}salePrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingPrice`,
                label: `[${labelPrefix}shippingPrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingRequiresInsurance`,
                label: `[${labelPrefix}shippingRequiresInsurance]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stockQuantity`,
                label: `[${labelPrefix}stockQuantity]`,
                type: 'number',
            },
            ....fields(`${keyPrefix}tags`, isInput),
            {
                key: `${keyPrefix}taxPrice`,
                label: `[${labelPrefix}taxPrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trackBatch`,
                label: `Whether this product requires batch (Chargennummer) tracking. - [${labelPrefix}trackBatch]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}trackSerial`,
                label: `Whether this product requires serial-number tracking. - [${labelPrefix}trackSerial]`,
                type: 'boolean',
            },
            ....fields(`${keyPrefix}unit`, isInput),
            {
                key: `${keyPrefix}weightUnit`,
                label: `[${labelPrefix}weightUnit]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weightValue`,
                label: `[${labelPrefix}weightValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}width`,
                label: `[${labelPrefix}width]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'availability': bundle.inputData?.[`${keyPrefix}availability`],
            'barcode': bundle.inputData?.[`${keyPrefix}barcode`],
            'brand': bundle.inputData?.[`${keyPrefix}brand`],
            'categoryId': bundle.inputData?.[`${keyPrefix}categoryId`],
            'condition': bundle.inputData?.[`${keyPrefix}condition`],
            'defaultLedgerAccount': bundle.inputData?.[`${keyPrefix}defaultLedgerAccount`],
            'defaultPrice': bundle.inputData?.[`${keyPrefix}defaultPrice`],
            'defaultPriceFormulaId': bundle.inputData?.[`${keyPrefix}defaultPriceFormulaId`],
            'defaultTaxRate': bundle.inputData?.[`${keyPrefix}defaultTaxRate`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'gtin': bundle.inputData?.[`${keyPrefix}gtin`],
            'height': bundle.inputData?.[`${keyPrefix}height`],
            'imageLink': bundle.inputData?.[`${keyPrefix}imageLink`],
            'images': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}images`)),
            'isTaxable': bundle.inputData?.[`${keyPrefix}isTaxable`],
            'length': bundle.inputData?.[`${keyPrefix}length`],
            'link': bundle.inputData?.[`${keyPrefix}link`],
            'maxStock': bundle.inputData?.[`${keyPrefix}maxStock`],
            'minStock': bundle.inputData?.[`${keyPrefix}minStock`],
            'mpn': bundle.inputData?.[`${keyPrefix}mpn`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'packageHeight': bundle.inputData?.[`${keyPrefix}packageHeight`],
            'packageLength': bundle.inputData?.[`${keyPrefix}packageLength`],
            'packageWeightUnit': bundle.inputData?.[`${keyPrefix}packageWeightUnit`],
            'packageWeightValue': bundle.inputData?.[`${keyPrefix}packageWeightValue`],
            'packageWidth': bundle.inputData?.[`${keyPrefix}packageWidth`],
            'productCode': bundle.inputData?.[`${keyPrefix}productCode`],
            'productType': bundle.inputData?.[`${keyPrefix}productType`],
            'purchasePrice': bundle.inputData?.[`${keyPrefix}purchasePrice`],
            'reorderQuantity': bundle.inputData?.[`${keyPrefix}reorderQuantity`],
            'salePrice': bundle.inputData?.[`${keyPrefix}salePrice`],
            'shippingPrice': bundle.inputData?.[`${keyPrefix}shippingPrice`],
            'shippingRequiresInsurance': bundle.inputData?.[`${keyPrefix}shippingRequiresInsurance`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'stockQuantity': bundle.inputData?.[`${keyPrefix}stockQuantity`],
            'tags': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}tags`)),
            'taxPrice': bundle.inputData?.[`${keyPrefix}taxPrice`],
            'trackBatch': bundle.inputData?.[`${keyPrefix}trackBatch`],
            'trackSerial': bundle.inputData?.[`${keyPrefix}trackSerial`],
            'unit': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}unit`)),
            'weightUnit': bundle.inputData?.[`${keyPrefix}weightUnit`],
            'weightValue': bundle.inputData?.[`${keyPrefix}weightValue`],
            'width': bundle.inputData?.[`${keyPrefix}width`],
        }
    },
}
