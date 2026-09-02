const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactId`,
                label: `Contact this attachment belongs to (per-contact DMS). References the contact entity. - [${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `[${labelPrefix}fileName]`,
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
                key: `${keyPrefix}ocrText`,
                label: `Raw text extracted by client-side OCR (tesseract.js), if run. - [${labelPrefix}ocrText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originalName`,
                label: `[${labelPrefix}originalName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}pdfaPath`,
                label: `[${labelPrefix}pdfaPath]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'fileSize': bundle.inputData?.[`${keyPrefix}fileSize`],
            'mimeType': bundle.inputData?.[`${keyPrefix}mimeType`],
            'ocrText': bundle.inputData?.[`${keyPrefix}ocrText`],
            'originalName': bundle.inputData?.[`${keyPrefix}originalName`],
            'pdfaPath': bundle.inputData?.[`${keyPrefix}pdfaPath`],
            'sha256Hash': bundle.inputData?.[`${keyPrefix}sha256Hash`],
            'uploadedBy': bundle.inputData?.[`${keyPrefix}uploadedBy`],
        }
    },
}
