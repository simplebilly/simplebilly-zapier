const samples = require('../samples/ContactApi');
const AnyType = require('../models/AnyType');
const Contact = require('../models/Contact');
const ContactTimelineResponse = require('../models/ContactTimelineResponse');
const PluginError = require('../models/PluginError');
const SalesVolumeReport = require('../models/SalesVolumeReport');
const utils = require('../utils/utils');

module.exports = {
    contactSchema: {
        key: 'contactSchema',
        noun: 'contact',
        display: {
            label: 'Serve JSON Schema for client-side validation',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/schema'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'contactSchema', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    contactTimeline: {
        key: 'contactTimeline',
        noun: 'contact',
        display: {
            label: 'Get the full per-contact timeline (Xentral §4.6/4.7).',
            description: 'Aggregates communications, quotations, orders, invoices and uploaded documents for a contact, merged into a single reverse-chronological feed.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ContactTimelineResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/{contact_id}/timeline'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'contactTimeline', response.json);
                    return results;
                })
            },
            sample: samples['ContactTimelineResponseSample']
        }
    },
    createContact: {
        key: 'createContact',
        noun: 'contact',
        display: {
            label: 'Create contact',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...Contact.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createContact', response.json);
                    return results;
                })
            },
            sample: samples['ContactSample']
        }
    },
    deleteContact: {
        key: 'deleteContact',
        noun: 'contact',
        display: {
            label: 'Soft-delete contact',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/{contact_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteContact', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getContact: {
        key: 'getContact',
        noun: 'contact',
        display: {
            label: 'Get single contact',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Contact.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/{contact_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getContact', response.json);
                    return results;
                })
            },
            sample: samples['ContactSample']
        }
    },
    listContacts: {
        key: 'listContacts',
        noun: 'contact',
        display: {
            label: 'List contacts with search, type filter, and pagination',
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
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'contact_type',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'tag',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'search': bundle.inputData?.['search'],
                        'contact_type': bundle.inputData?.['contact_type'],
                        'tag': bundle.inputData?.['tag'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listContacts', response.json);
                    return results;
                })
            },
            sample: samples['ContactSample']
        }
    },
    salesVolume: {
        key: 'salesVolume',
        noun: 'contact',
        display: {
            label: 'Sales volume per contact',
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
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'contact_type',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'tag',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...SalesVolumeReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/sales-volume'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'search': bundle.inputData?.['search'],
                        'contact_type': bundle.inputData?.['contact_type'],
                        'tag': bundle.inputData?.['tag'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'salesVolume', response.json);
                    return results;
                })
            },
            sample: samples['SalesVolumeReportSample']
        }
    },
    updateContact: {
        key: 'updateContact',
        noun: 'contact',
        display: {
            label: 'Update contact',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...Contact.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/{contact_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateContact', response.json);
                    return results;
                })
            },
            sample: samples['ContactSample']
        }
    },
}
