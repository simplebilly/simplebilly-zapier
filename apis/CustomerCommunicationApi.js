const samples = require('../samples/CustomerCommunicationApi');
const CommunicationChannel = require('../models/CommunicationChannel');
const CommunicationDirection = require('../models/CommunicationDirection');
const ContactHistoryResponse = require('../models/ContactHistoryResponse');
const CustomerCommunication = require('../models/CustomerCommunication');
const CustomerCommunicationCreate = require('../models/CustomerCommunicationCreate');
const CustomerCommunicationUpdate = require('../models/CustomerCommunicationUpdate');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createCommunication: {
        key: 'createCommunication',
        noun: 'customer_communication',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CustomerCommunicationCreate.fields(),
            ],
            outputFields: [
                ...CustomerCommunication.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CustomerCommunicationCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCommunication', response.json);
                    return results;
                })
            },
            sample: samples['CustomerCommunicationSample']
        }
    },
    customercommunicationRestore: {
        key: 'customercommunicationRestore',
        noun: 'customer_communication',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'communication_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...CustomerCommunication.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications/{communication_id}/restore'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'customercommunicationRestore', response.json);
                    return results;
                })
            },
            sample: samples['CustomerCommunicationSample']
        }
    },
    deleteCommunication: {
        key: 'deleteCommunication',
        noun: 'customer_communication',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'communication_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications/{communication_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCommunication', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCommunication: {
        key: 'getCommunication',
        noun: 'customer_communication',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'communication_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...CustomerCommunication.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications/{communication_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCommunication', response.json);
                    return results;
                })
            },
            sample: samples['CustomerCommunicationSample']
        }
    },
    getContactHistory: {
        key: 'getContactHistory',
        noun: 'customer_communication',
        display: {
            label: '',
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
                ...ContactHistoryResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/contacts/{contact_id}/communications'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getContactHistory', response.json);
                    return results;
                })
            },
            sample: samples['ContactHistoryResponseSample']
        }
    },
    listCommunications: {
        key: 'listCommunications',
        noun: 'customer_communication',
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
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'contact_id',
                    label: 'Filter history to a single contact.',
                    type: 'string',
                },
                ....fields(),
                ....fields(),
                {
                    key: 'from',
                    label: 'Only include communications after this ISO date (inclusive).',
                    type: 'string',
                },
                {
                    key: 'to',
                    label: 'Only include communications before this ISO date (inclusive).',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'contact_id': bundle.inputData?.['contact_id'],
                        'channel': bundle.inputData?.['channel'],
                        'direction': bundle.inputData?.['direction'],
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listCommunications', response.json);
                    return results;
                })
            },
            sample: samples['CustomerCommunicationSample']
        }
    },
    updateCommunication: {
        key: 'updateCommunication',
        noun: 'customer_communication',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'communication_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...CustomerCommunicationUpdate.fields(),
            ],
            outputFields: [
                ...CustomerCommunication.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/communications/{communication_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CustomerCommunicationUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCommunication', response.json);
                    return results;
                })
            },
            sample: samples['CustomerCommunicationSample']
        }
    },
}
