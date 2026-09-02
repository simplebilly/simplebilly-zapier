const samples = require('../samples/SupplierInvoiceApi');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const SupplierInvoice = require('../models/SupplierInvoice');
const SupplierInvoiceStatusUpdate = require('../models/SupplierInvoiceStatusUpdate');
const utils = require('../utils/utils');

module.exports = {
    createSupplierInvoice: {
        key: 'createSupplierInvoice',
        noun: 'supplier_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SupplierInvoice.fields(),
            ],
            outputFields: [
                ...SupplierInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SupplierInvoice.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSupplierInvoice', response.json);
                    return results;
                })
            },
            sample: samples['SupplierInvoiceSample']
        }
    },
    deleteSupplierInvoice: {
        key: 'deleteSupplierInvoice',
        noun: 'supplier_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_invoice_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices/{supplier_invoice_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSupplierInvoice', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSupplierInvoice: {
        key: 'getSupplierInvoice',
        noun: 'supplier_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_invoice_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...SupplierInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices/{supplier_invoice_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSupplierInvoice', response.json);
                    return results;
                })
            },
            sample: samples['SupplierInvoiceSample']
        }
    },
    listSupplierInvoices: {
        key: 'listSupplierInvoices',
        noun: 'supplier_invoice',
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
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_name',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices/'),
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
                        'purchase_order_id': bundle.inputData?.['purchase_order_id'],
                        'supplier_name': bundle.inputData?.['supplier_name'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listSupplierInvoices', response.json);
                    return results;
                })
            },
            sample: samples['SupplierInvoiceSample']
        }
    },
    updateSupplierInvoice: {
        key: 'updateSupplierInvoice',
        noun: 'supplier_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_invoice_id',
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
                ...SupplierInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices/{supplier_invoice_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSupplierInvoice', response.json);
                    return results;
                })
            },
            sample: samples['SupplierInvoiceSample']
        }
    },
    updateSupplierInvoiceStatus: {
        key: 'updateSupplierInvoiceStatus',
        noun: 'supplier_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_invoice_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...SupplierInvoiceStatusUpdate.fields(),
            ],
            outputFields: [
                ...SupplierInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-invoices/{supplier_invoice_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SupplierInvoiceStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSupplierInvoiceStatus', response.json);
                    return results;
                })
            },
            sample: samples['SupplierInvoiceSample']
        }
    },
}
