const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}connectionId`,
                label: `References the marketplace connection entity. - [${labelPrefix}connectionId]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}eventBody`, isInput),
            {
                key: `${keyPrefix}eventType`,
                label: `[${labelPrefix}eventType]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}headers`, isInput),
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}processed`,
                label: `[${labelPrefix}processed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}processingError`,
                label: `[${labelPrefix}processingError]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'connectionId': bundle.inputData?.[`${keyPrefix}connectionId`],
            'eventBody': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}eventBody`)),
            'eventType': bundle.inputData?.[`${keyPrefix}eventType`],
            'headers': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}headers`)),
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'processed': bundle.inputData?.[`${keyPrefix}processed`],
            'processingError': bundle.inputData?.[`${keyPrefix}processingError`],
        }
    },
}
