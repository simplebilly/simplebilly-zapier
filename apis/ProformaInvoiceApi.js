const samples = require('../samples/ProformaInvoiceApi');
const AnyType = require('../models/AnyType');
const ConvertResponse = require('../models/ConvertResponse');
const PluginError = require('../models/PluginError');
const ProformaInvoice = require('../models/ProformaInvoice');
const utils = require('../utils/utils');

module.exports = {
    convertProformaToInvoice: {
        key: 'convertProformaToInvoice',
        noun: 'proforma_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'proforma_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ConvertResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices/{proforma_id}/convert'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'convertProformaToInvoice', response.json);
                    return results;
                })
            },
            sample: samples['ConvertResponseSample']
        }
    },
    createProformaInvoice: {
        key: 'createProformaInvoice',
        noun: 'proforma_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ProformaInvoice.fields(),
            ],
            outputFields: [
                ...ProformaInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProformaInvoice.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProformaInvoice', response.json);
                    return results;
                })
            },
            sample: samples['ProformaInvoiceSample']
        }
    },
    deleteProformaInvoice: {
        key: 'deleteProformaInvoice',
        noun: 'proforma_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'proforma_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices/{proforma_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProformaInvoice', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getProformaInvoice: {
        key: 'getProformaInvoice',
        noun: 'proforma_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'proforma_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProformaInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices/{proforma_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProformaInvoice', response.json);
                    return results;
                })
            },
            sample: samples['ProformaInvoiceSample']
        }
    },
    listProformaInvoices: {
        key: 'listProformaInvoices',
        noun: 'proforma_invoice',
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
                    key: 'customer_id',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices/'),
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
                        'customer_id': bundle.inputData?.['customer_id'],
                        'order_number': bundle.inputData?.['order_number'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listProformaInvoices', response.json);
                    return results;
                })
            },
            sample: samples['ProformaInvoiceSample']
        }
    },
    updateProformaInvoice: {
        key: 'updateProformaInvoice',
        noun: 'proforma_invoice',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'proforma_id',
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
                ...ProformaInvoice.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/proforma-invoices/{proforma_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProformaInvoice', response.json);
                    return results;
                })
            },
            sample: samples['ProformaInvoiceSample']
        }
    },
}
