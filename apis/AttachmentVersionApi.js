const samples = require('../samples/AttachmentVersionApi');
const Attachment = require('../models/Attachment');
const AttachmentVersion = require('../models/AttachmentVersion');
const NewVersionRequest = require('../models/NewVersionRequest');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createAttachmentVersion: {
        key: 'createAttachmentVersion',
        noun: 'attachment_version',
        display: {
            label: '',
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
                ...NewVersionRequest.fields(),
            ],
            outputFields: [
                ...AttachmentVersion.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{attachment_id}/versions'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...NewVersionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAttachmentVersion', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentVersionSample']
        }
    },
    listAttachmentVersions: {
        key: 'listAttachmentVersions',
        noun: 'attachment_version',
        display: {
            label: '',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{attachment_id}/versions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listAttachmentVersions', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentVersionSample']
        }
    },
    restoreAttachmentVersion: {
        key: 'restoreAttachmentVersion',
        noun: 'attachment_version',
        display: {
            label: '',
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
                {
                    key: 'version_id',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/attachments/{attachment_id}/versions/{version_id}/restore'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'restoreAttachmentVersion', response.json);
                    return results;
                })
            },
            sample: samples['AttachmentSample']
        }
    },
}
