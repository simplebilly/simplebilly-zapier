const samples = require('../samples/PurchaseOrderApi');
const AnyType = require('../models/AnyType');
const InvoiceMatchRequest = require('../models/InvoiceMatchRequest');
const PluginError = require('../models/PluginError');
const PurchaseOrder = require('../models/PurchaseOrder');
const PurchaseOrderStatusUpdate = require('../models/PurchaseOrderStatusUpdate');
const utils = require('../utils/utils');

module.exports = {
    createPurchaseOrder: {
        key: 'createPurchaseOrder',
        noun: 'purchase_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PurchaseOrder.fields(),
            ],
            outputFields: [
                ...PurchaseOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PurchaseOrder.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPurchaseOrder', response.json);
                    return results;
                })
            },
            sample: samples['PurchaseOrderSample']
        }
    },
    deletePurchaseOrder: {
        key: 'deletePurchaseOrder',
        noun: 'purchase_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/{purchase_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePurchaseOrder', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getPurchaseOrder: {
        key: 'getPurchaseOrder',
        noun: 'purchase_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PurchaseOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/{purchase_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPurchaseOrder', response.json);
                    return results;
                })
            },
            sample: samples['PurchaseOrderSample']
        }
    },
    listPurchaseOrders: {
        key: 'listPurchaseOrders',
        noun: 'purchase_order',
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
                    key: 'supplier_name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/'),
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
                        'supplier_name': bundle.inputData?.['supplier_name'],
                        'search': bundle.inputData?.['search'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPurchaseOrders', response.json);
                    return results;
                })
            },
            sample: samples['PurchaseOrderSample']
        }
    },
    matchInvoice: {
        key: 'matchInvoice',
        noun: 'purchase_order',
        display: {
            label: '3-way invoice check (Rechnungsprüfung): compares the purchase order line items, the quantities received via goods receipts, and the supplier invoice line items, reporting quantity and price variances per product.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceMatchRequest.fields(),
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/{purchase_order_id}/match-invoice'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...InvoiceMatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'matchInvoice', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    updatePurchaseOrder: {
        key: 'updatePurchaseOrder',
        noun: 'purchase_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'purchase_order_id',
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
                ...PurchaseOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/{purchase_order_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePurchaseOrder', response.json);
                    return results;
                })
            },
            sample: samples['PurchaseOrderSample']
        }
    },
    updatePurchaseOrderStatus: {
        key: 'updatePurchaseOrderStatus',
        noun: 'purchase_order',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PurchaseOrderStatusUpdate.fields(),
            ],
            outputFields: [
                ...PurchaseOrder.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/purchase-orders/{purchase_order_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PurchaseOrderStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePurchaseOrderStatus', response.json);
                    return results;
                })
            },
            sample: samples['PurchaseOrderSample']
        }
    },
}
