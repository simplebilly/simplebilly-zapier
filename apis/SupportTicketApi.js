const samples = require('../samples/SupportTicketApi');
const CreateTicketRequest = require('../models/CreateTicketRequest');
const SupportTicket = require('../models/SupportTicket');
const SupportTicketUpdate = require('../models/SupportTicketUpdate');
const utils = require('../utils/utils');

module.exports = {
    createTicketApi: {
        key: 'createTicketApi',
        noun: 'support_ticket',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CreateTicketRequest.fields(),
            ],
            outputFields: [
                ...SupportTicket.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateTicketRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTicketApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportTicketSample']
        }
    },
    deleteTicketApi: {
        key: 'deleteTicketApi',
        noun: 'support_ticket',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'ticket_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets/{ticket_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTicketApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getTicketApi: {
        key: 'getTicketApi',
        noun: 'support_ticket',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'ticket_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...SupportTicket.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets/{ticket_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTicketApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportTicketSample']
        }
    },
    listTicketsApi: {
        key: 'listTicketsApi',
        noun: 'support_ticket',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'priority',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'assigned_to',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'channel_type',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'customer_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'status': bundle.inputData?.['status'],
                        'priority': bundle.inputData?.['priority'],
                        'assigned_to': bundle.inputData?.['assigned_to'],
                        'channel_type': bundle.inputData?.['channel_type'],
                        'customer_id': bundle.inputData?.['customer_id'],
                        'search': bundle.inputData?.['search'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listTicketsApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportTicketSample']
        }
    },
    updateTicketApi: {
        key: 'updateTicketApi',
        noun: 'support_ticket',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'ticket_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...SupportTicketUpdate.fields(),
            ],
            outputFields: [
                ...SupportTicket.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets/{ticket_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SupportTicketUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTicketApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportTicketSample']
        }
    },
}
