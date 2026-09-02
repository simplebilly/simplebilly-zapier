const samples = require('../samples/ProductionOrderApi');
const PluginError = require('../models/PluginError');
const ProductionOrder = require('../models/ProductionOrder');
const ProductionOrderCosting = require('../models/ProductionOrderCosting');
const ProductionOrderStatusUpdate = require('../models/ProductionOrderStatusUpdate');
const utils = require('../utils/utils');

module.exports = {
    createProductionOrder: {
        key: 'createProductionOrder',
        noun: 'production_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ProductionOrder.fields(),
            ],
            outputFields: [
                ...ProductionOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductionOrder.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProductionOrder', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderSample']
        }
    },
    deleteProductionOrder: {
        key: 'deleteProductionOrder',
        noun: 'production_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'production_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/{production_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProductionOrder', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getProductionOrder: {
        key: 'getProductionOrder',
        noun: 'production_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'production_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProductionOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/{production_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProductionOrder', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderSample']
        }
    },
    listProductionOrders: {
        key: 'listProductionOrders',
        noun: 'production_order',
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
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'status',
                    label: 'Filter by status.',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'search': bundle.inputData?.['search'],
                        'status': bundle.inputData?.['status'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listProductionOrders', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderSample']
        }
    },
    productionOrderCosting: {
        key: 'productionOrderCosting',
        noun: 'production_order',
        display: {
            label: 'Actual-costing report (Nachkalkulation) — material costs from BOM components at their purchase price plus the resulting per-unit cost and margin against the finished product&#39;s sale price.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'production_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProductionOrderCosting.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/{production_order_id}/costing'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'productionOrderCosting', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderCostingSample']
        }
    },
    updateProductionOrder: {
        key: 'updateProductionOrder',
        noun: 'production_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'production_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ProductionOrder.fields(),
            ],
            outputFields: [
                ...ProductionOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/{production_order_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductionOrder.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductionOrder', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderSample']
        }
    },
    updateProductionOrderStatus: {
        key: 'updateProductionOrderStatus',
        noun: 'production_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'production_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ProductionOrderStatusUpdate.fields(),
            ],
            outputFields: [
                ...ProductionOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/production-orders/{production_order_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductionOrderStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductionOrderStatus', response.json);
                    return results;
                })
            },
            sample: samples['ProductionOrderSample']
        }
    },
}
