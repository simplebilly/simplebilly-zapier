const samples = require('../samples/TicketMessageApi');
const SendMessageDto = require('../models/SendMessageDto');
const TicketMessage = require('../models/TicketMessage');
const utils = require('../utils/utils');

module.exports = {
    listMessagesApi: {
        key: 'listMessagesApi',
        noun: 'ticket_message',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets/{ticket_id}/messages'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listMessagesApi', response.json);
                    return results;
                })
            },
            sample: samples['TicketMessageSample']
        }
    },
    sendMessageApi: {
        key: 'sendMessageApi',
        noun: 'ticket_message',
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
                ...SendMessageDto.fields(),
            ],
            outputFields: [
                ...TicketMessage.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/tickets/{ticket_id}/messages'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SendMessageDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'sendMessageApi', response.json);
                    return results;
                })
            },
            sample: samples['TicketMessageSample']
        }
    },
}
