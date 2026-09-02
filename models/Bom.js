const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const BomStatus = require('../models/BomStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}components`, isInput),
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}outputQuantity`,
                label: `Output quantity per production run (defaults to 1). - [${labelPrefix}outputQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}productId`,
                label: `The finished product this BOM produces. References the product entity. - [${labelPrefix}productId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...BomStatus.fields(`${keyPrefix}status`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'components': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}components`)),
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'outputQuantity': bundle.inputData?.[`${keyPrefix}outputQuantity`],
            'productId': bundle.inputData?.[`${keyPrefix}productId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
