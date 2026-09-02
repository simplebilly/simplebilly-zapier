const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}actions`, isInput),
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}triggerEvent`,
                label: `Event that triggers the workflow, e.g. `order.paid`, `order.shipped`. - [${labelPrefix}triggerEvent]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'actions': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}actions`)),
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'triggerEvent': bundle.inputData?.[`${keyPrefix}triggerEvent`],
        }
    },
}
