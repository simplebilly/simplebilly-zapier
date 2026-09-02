const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}attachmentId`,
                label: `Parent attachment whose history this row records. - [${labelPrefix}attachmentId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `Storage key of this version's bytes. - [${labelPrefix}fileName]`,
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
            {
                key: `${keyPrefix}uploadedBy`,
                label: `[${labelPrefix}uploadedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}versionNumber`,
                label: `1-based; ascending per attachment in upload order. - [${labelPrefix}versionNumber]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'attachmentId': bundle.inputData?.[`${keyPrefix}attachmentId`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'fileSize': bundle.inputData?.[`${keyPrefix}fileSize`],
            'mimeType': bundle.inputData?.[`${keyPrefix}mimeType`],
            'originalName': bundle.inputData?.[`${keyPrefix}originalName`],
            'sha256Hash': bundle.inputData?.[`${keyPrefix}sha256Hash`],
            'uploadedBy': bundle.inputData?.[`${keyPrefix}uploadedBy`],
            'versionNumber': bundle.inputData?.[`${keyPrefix}versionNumber`],
        }
    },
}
