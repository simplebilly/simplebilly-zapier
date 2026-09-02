const utils = require('../utils/utils');
const CostingLine = require('../models/CostingLine');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}costPerUnit`,
                label: `material_cost_total ÷ quantity. - [${labelPrefix}costPerUnit]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}costSource`,
                label: `\"actual\" when costed from stock-movement consumption, else \"planned\". - [${labelPrefix}costSource]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lines`,
                label: `[${labelPrefix}lines]`,
                children: CostingLine.fields(`${keyPrefix}lines${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}marginPerUnit`,
                label: `sale_price − cost_per_unit. - [${labelPrefix}marginPerUnit]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marginPercent`,
                label: `margin_per_unit ÷ cost_per_unit as a percentage. - [${labelPrefix}marginPercent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}materialCostTotal`,
                label: `Total material cost for the whole order. - [${labelPrefix}materialCostTotal]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderNumber`,
                label: `[${labelPrefix}orderNumber]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}productionOrderId`,
                label: `[${labelPrefix}productionOrderId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}salePrice`,
                label: `Finished product's sale price per unit (used to compute margin). - [${labelPrefix}salePrice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'costPerUnit': bundle.inputData?.[`${keyPrefix}costPerUnit`],
            'costSource': bundle.inputData?.[`${keyPrefix}costSource`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, CostingLine),
            'marginPerUnit': bundle.inputData?.[`${keyPrefix}marginPerUnit`],
            'marginPercent': bundle.inputData?.[`${keyPrefix}marginPercent`],
            'materialCostTotal': bundle.inputData?.[`${keyPrefix}materialCostTotal`],
            'orderNumber': bundle.inputData?.[`${keyPrefix}orderNumber`],
            'productionOrderId': bundle.inputData?.[`${keyPrefix}productionOrderId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'salePrice': bundle.inputData?.[`${keyPrefix}salePrice`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
