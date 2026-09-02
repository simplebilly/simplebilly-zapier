const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}fileName`,
                label: `Storage key of the already-uploaded bytes. - [${labelPrefix}fileName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileSize`,
                label: `[${labelPrefix}fileSize]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}mimeType`,
                label: `[${labelPrefix}mimeType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originalName`,
                label: `[${labelPrefix}originalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sha256Hash`,
                label: `[${labelPrefix}sha256Hash]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'fileSize': bundle.inputData?.[`${keyPrefix}fileSize`],
            'mimeType': bundle.inputData?.[`${keyPrefix}mimeType`],
            'originalName': bundle.inputData?.[`${keyPrefix}originalName`],
            'sha256Hash': bundle.inputData?.[`${keyPrefix}sha256Hash`],
        }
    },
}
