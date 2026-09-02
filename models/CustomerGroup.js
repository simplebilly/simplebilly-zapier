const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}memberIds`,
                label: `Contact ids that are members of this group. - [${labelPrefix}memberIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}membershipFilter`,
                label: `Rule description for membership, e.g. \"orders > 5 last 12 months\". - [${labelPrefix}membershipFilter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Unique group name, e.g. \"VIP\", \"Wholesale\", \"Newsletter\". - [${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'memberIds': bundle.inputData?.[`${keyPrefix}memberIds`],
            'membershipFilter': bundle.inputData?.[`${keyPrefix}membershipFilter`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
        }
    },
}
