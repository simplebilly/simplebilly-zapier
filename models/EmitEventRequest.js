const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}event_type`,
                label: `[${labelPrefix}event_type]`,
                required: true,
                type: 'string',
            },
            ....fields(`${keyPrefix}payload`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'event_type': bundle.inputData?.[`${keyPrefix}event_type`],
            'payload': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}payload`)),
        }
    },
}
