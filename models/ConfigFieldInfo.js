const utils = require('../utils/utils');
const ConfigFieldKind = require('../models/ConfigFieldKind');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ConfigFieldKind.fields(`${keyPrefix}kind`, isInput),
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeholder`,
                label: `[${labelPrefix}placeholder]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}required`,
                label: `[${labelPrefix}required]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'kind': utils.removeIfEmpty(ConfigFieldKind.mapping(bundle, `${keyPrefix}kind`)),
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'placeholder': bundle.inputData?.[`${keyPrefix}placeholder`],
            'required': bundle.inputData?.[`${keyPrefix}required`],
        }
    },
}
