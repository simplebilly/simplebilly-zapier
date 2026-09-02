const samples = require('../samples/OrderApi');
const AnyType = require('../models/AnyType');
const Order = require('../models/Order');
const OrderStateUpdate = require('../models/OrderStateUpdate');
const OrderTagsRequest = require('../models/OrderTagsRequest');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    addOrderTags: {
        key: 'addOrderTags',
        noun: 'order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...OrderTagsRequest.fields(),
            ],
            outputFields: [
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/{order_id}/tags'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OrderTagsRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addOrderTags', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    findOrderByExternalRef: {
        key: 'findOrderByExternalRef',
        noun: 'order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'ext_ref',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/by-ext-ref/{ext_ref}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'findOrderByExternalRef', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    getOrder: {
        key: 'getOrder',
        noun: 'order',
        display: {
            label: '',
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
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/order/{order_number}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOrder', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    getOrders: {
        key: 'getOrders',
        noun: 'order',
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
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'include_deleted',
                    label: 'Soft-delete entities: set true to include rows with &#x60;deleted_at&#x60; set.',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders'),
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
                        'include_deleted': bundle.inputData?.['include_deleted'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOrders', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    patchOrder: {
        key: 'patchOrder',
        noun: 'order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_id',
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
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/{order_id}'),
                    method: 'PATCH',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchOrder', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    replaceOrderTags: {
        key: 'replaceOrderTags',
        noun: 'order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...OrderTagsRequest.fields(),
            ],
            outputFields: [
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/{order_id}/tags'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OrderTagsRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'replaceOrderTags', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
    updateOrderState: {
        key: 'updateOrderState',
        noun: 'order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...OrderStateUpdate.fields(),
            ],
            outputFields: [
                ...Order.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/{order_id}/state'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OrderStateUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateOrderState', response.json);
                    return results;
                })
            },
            sample: samples['OrderSample']
        }
    },
}
