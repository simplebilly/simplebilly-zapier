const samples = require('../samples/PackingApi');
const AnyType = require('../models/AnyType');
const PackingCompleteRequest = require('../models/PackingCompleteRequest');
const PackingCompleteResponse = require('../models/PackingCompleteResponse');
const PackingQueue = require('../models/PackingQueue');
const PackingVideoResponse = require('../models/PackingVideoResponse');
const PluginError = require('../models/PluginError');
const PrintDeliveryNoteResponse = require('../models/PrintDeliveryNoteResponse');
const PrintLabelResponse = require('../models/PrintLabelResponse');
const utils = require('../utils/utils');

module.exports = {
    completePacking: {
        key: 'completePacking',
        noun: 'packing',
        display: {
            label: 'Mark packing as complete and transition order to shipped',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_number',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PackingCompleteRequest.fields(),
            ],
            outputFields: [
                ...PackingCompleteResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/packing/{order_number}/complete'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PackingCompleteRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'completePacking', response.json);
                    return results;
                })
            },
            sample: samples['PackingCompleteResponseSample']
        }
    },
    getPackingQueue: {
        key: 'getPackingQueue',
        noun: 'packing',
        display: {
            label: 'Get the packing queue - orders ready for packing',
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
            ],
            outputFields: [
                ...PackingQueue.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/packing/queue'),
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
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPackingQueue', response.json);
                    return results;
                })
            },
            sample: samples['PackingQueueSample']
        }
    },
    printDeliveryNote: {
        key: 'printDeliveryNote',
        noun: 'packing',
        display: {
            label: 'Print delivery note (Lieferschein) for an order',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_number',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PrintDeliveryNoteResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/packing/{order_number}/print-delivery-note'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'printDeliveryNote', response.json);
                    return results;
                })
            },
            sample: samples['PrintDeliveryNoteResponseSample']
        }
    },
    printLabel: {
        key: 'printLabel',
        noun: 'packing',
        display: {
            label: 'Print shipping label for an order',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_number',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PrintLabelResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/packing/{order_number}/print-label'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'printLabel', response.json);
                    return results;
                })
            },
            sample: samples['PrintLabelResponseSample']
        }
    },
    recordPackingVideo: {
        key: 'recordPackingVideo',
        noun: 'packing',
        display: {
            label: 'Record video of packing process',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_number',
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
                ...PackingVideoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/packing/{order_number}/record-video'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'recordPackingVideo', response.json);
                    return results;
                })
            },
            sample: samples['PackingVideoResponseSample']
        }
    },
}
