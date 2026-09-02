const samples = require('../samples/ReturnOrderApi');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const ReturnLogisticsQueueItem = require('../models/ReturnLogisticsQueueItem');
const ReturnLogisticsSummary = require('../models/ReturnLogisticsSummary');
const ReturnOrder = require('../models/ReturnOrder');
const ReturnOrderStatusUpdate = require('../models/ReturnOrderStatusUpdate');
const utils = require('../utils/utils');

module.exports = {
    createReturnOrder: {
        key: 'createReturnOrder',
        noun: 'return_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ReturnOrder.fields(),
            ],
            outputFields: [
                ...ReturnOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ReturnOrder.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createReturnOrder', response.json);
                    return results;
                })
            },
            sample: samples['ReturnOrderSample']
        }
    },
    deleteReturnOrder: {
        key: 'deleteReturnOrder',
        noun: 'return_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'return_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/{return_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteReturnOrder', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getReturnOrder: {
        key: 'getReturnOrder',
        noun: 'return_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'return_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ReturnOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/{return_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReturnOrder', response.json);
                    return results;
                })
            },
            sample: samples['ReturnOrderSample']
        }
    },
    listReturnOrders: {
        key: 'listReturnOrders',
        noun: 'return_order',
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
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'customer_name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'order_number',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'status': bundle.inputData?.['status'],
                        'customer_name': bundle.inputData?.['customer_name'],
                        'order_number': bundle.inputData?.['order_number'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listReturnOrders', response.json);
                    return results;
                })
            },
            sample: samples['ReturnOrderSample']
        }
    },
    returnLogisticsQueue: {
        key: 'returnLogisticsQueue',
        noun: 'return_order',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/logistics-queue'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'returnLogisticsQueue', response.json);
                    return results;
                })
            },
            sample: samples['ReturnLogisticsQueueItemSample']
        }
    },
    returnLogisticsSummary: {
        key: 'returnLogisticsSummary',
        noun: 'return_order',
        display: {
            label: 'Returns-logistics aggregation for the dashboard: quantities received, restocked and scrapped per warehouse.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ReturnLogisticsSummary.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/logistics-summary'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'returnLogisticsSummary', response.json);
                    return results;
                })
            },
            sample: samples['ReturnLogisticsSummarySample']
        }
    },
    updateReturnOrder: {
        key: 'updateReturnOrder',
        noun: 'return_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'return_order_id',
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
                ...ReturnOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/{return_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateReturnOrder', response.json);
                    return results;
                })
            },
            sample: samples['ReturnOrderSample']
        }
    },
    updateReturnOrderStatus: {
        key: 'updateReturnOrderStatus',
        noun: 'return_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'return_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ReturnOrderStatusUpdate.fields(),
            ],
            outputFields: [
                ...ReturnOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/returns/{return_order_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ReturnOrderStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateReturnOrderStatus', response.json);
                    return results;
                })
            },
            sample: samples['ReturnOrderSample']
        }
    },
}
