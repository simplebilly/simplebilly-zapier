const samples = require('../samples/EventSubscriptionApi');
const AnyType = require('../models/AnyType');
const EventSubscription = require('../models/EventSubscription');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createEventSubscription: {
        key: 'createEventSubscription',
        noun: 'event_subscription',
        display: {
            label: '',
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
                ...EventSubscription.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/event-subscriptions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createEventSubscription', response.json);
                    return results;
                })
            },
            sample: samples['EventSubscriptionSample']
        }
    },
    deleteEventSubscription: {
        key: 'deleteEventSubscription',
        noun: 'event_subscription',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'subscription_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/event-subscriptions/{subscription_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteEventSubscription', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listEventSubscriptions: {
        key: 'listEventSubscriptions',
        noun: 'event_subscription',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/event-subscriptions/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listEventSubscriptions', response.json);
                    return results;
                })
            },
            sample: samples['EventSubscriptionSample']
        }
    },
}
