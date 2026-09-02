const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
                required: true,
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
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
