const utils = require('../utils/utils');
const Model = require('../models/Model');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}access_token`,
                label: `[${labelPrefix}access_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}refresh_token`,
                label: `[${labelPrefix}refresh_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                required: true,
                type: 'boolean',
            },
            ...Model.fields(`${keyPrefix}user`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'access_token': bundle.inputData?.[`${keyPrefix}access_token`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'refresh_token': bundle.inputData?.[`${keyPrefix}refresh_token`],
            'success': bundle.inputData?.[`${keyPrefix}success`],
            'user': utils.removeIfEmpty(Model.mapping(bundle, `${keyPrefix}user`)),
        }
    },
}
