const samples = require('../samples/AttachmentApi');
const Attachment = require('../models/Attachment');
const AttachmentCreate = require('../models/AttachmentCreate');
const OcrTextRequest = require('../models/OcrTextRequest');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    attachmentRestore: {
        key: 'attachmentRestore',
        noun: 'attachment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Attachment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{id}/restore'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'attachmentRestore', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
    createAttachment: {
        key: 'createAttachment',
        noun: 'attachment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...AttachmentCreate.fields(),
            ],
            outputFields: [
                ...Attachment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AttachmentCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAttachment', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
    deleteAttachment: {
        key: 'deleteAttachment',
        noun: 'attachment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAttachment', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getAttachment: {
        key: 'getAttachment',
        noun: 'attachment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Attachment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAttachment', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
    listAttachments: {
        key: 'listAttachments',
        noun: 'attachment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'contactId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'contactId': bundle.inputData?.['contactId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listAttachments', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
    saveAttachmentOcrText: {
        key: 'saveAttachmentOcrText',
        noun: 'attachment',
        display: {
            label: 'Persist client-side OCR output for an attachment.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'attachment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...OcrTextRequest.fields(),
            ],
            outputFields: [
                ...Attachment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{attachment_id}/ocr-text'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OcrTextRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'saveAttachmentOcrText', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
}
