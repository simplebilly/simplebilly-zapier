const samples = require('../samples/WebhooksApi');
const CreateSubscriptionRequest = require('../models/CreateSubscriptionRequest');
const EmitEventRequest = require('../models/EmitEventRequest');
const PluginError = require('../models/PluginError');
const UpdateSubscriptionRequest = require('../models/UpdateSubscriptionRequest');
const WebhookEvent = require('../models/WebhookEvent');
const WebhookSubscription = require('../models/WebhookSubscription');
const utils = require('../utils/utils');

module.exports = {
    createSubscription: {
        key: 'createSubscription',
        noun: 'webhooks',
        display: {
            label: 'Create a webhook subscription (outbound hook).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CreateSubscriptionRequest.fields(),
            ],
            outputFields: [
                ...WebhookSubscription.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhook-subscriptions'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateSubscriptionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSubscription', response.json);
                    return results;
                })
            },
            sample: samples['WebhookSubscriptionSample']
        }
    },
    deleteSubscription: {
        key: 'deleteSubscription',
        noun: 'webhooks',
        display: {
            label: 'Delete a webhook subscription.',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhook-subscriptions/{subscription_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSubscription', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    emitApi: {
        key: 'emitApi',
        noun: 'webhooks',
        display: {
            label: 'Manually fire an event against matching hooks (for testing/flows).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...EmitEventRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhooks/emit'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...EmitEventRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'emitApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listEvent: {
        key: 'listEvent',
        noun: 'webhooks',
        display: {
            label: 'List webhook events (inbound + outbound log).',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhook-events'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listEvent', response.json);
                    return results;
                })
            },
            sample: samples['WebhookEventSample']
        }
    },
    listSubscriptions: {
        key: 'listSubscriptions',
        noun: 'webhooks',
        display: {
            label: 'List webhook subscriptions for the tenant.',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhook-subscriptions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listSubscriptions', response.json);
                    return results;
                })
            },
            sample: samples['WebhookSubscriptionSample']
        }
    },
    updateSubscription: {
        key: 'updateSubscription',
        noun: 'webhooks',
        display: {
            label: 'Update a webhook subscription.',
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
                ...UpdateSubscriptionRequest.fields(),
            ],
            outputFields: [
                ...WebhookSubscription.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/webhook-subscriptions/{subscription_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateSubscriptionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSubscription', response.json);
                    return results;
                })
            },
            sample: samples['WebhookSubscriptionSample']
        }
    },
}
