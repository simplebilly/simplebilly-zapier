const samples = require('../samples/ProductApi');
const PluginError = require('../models/PluginError');
const Product = require('../models/Product');
const ProductCreate = require('../models/ProductCreate');
const ProductStock = require('../models/ProductStock');
const ProductUpdate = require('../models/ProductUpdate');
const StockUpdateRequest = require('../models/StockUpdateRequest');
const utils = require('../utils/utils');

module.exports = {
    createProductApi: {
        key: 'createProductApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ProductCreate.fields(),
            ],
            outputFields: [
                ...Product.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProductApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductSample']
        }
    },
    deleteProductApi: {
        key: 'deleteProductApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProductApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getProductApi: {
        key: 'getProductApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Product.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProductApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductSample']
        }
    },
    getProductStockApi: {
        key: 'getProductStockApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProductStock.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}/stock'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProductStockApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductStockSample']
        }
    },
    getProductsApi: {
        key: 'getProductsApi',
        noun: 'product',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProductsApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductSample']
        }
    },
    listLowStockProductsApi: {
        key: 'listLowStockProductsApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'threshold',
                    label: '',
                    type: 'number',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/low-stock'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'threshold': bundle.inputData?.['threshold'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listLowStockProductsApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductStockSample']
        }
    },
    productRestore: {
        key: 'productRestore',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Product.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}/restore'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'productRestore', response.json);
                    return results;
                })
            },
            sample: samples['ProductSample']
        }
    },
    updateProductApi: {
        key: 'updateProductApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ProductUpdate.fields(),
            ],
            outputFields: [
                ...Product.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductSample']
        }
    },
    updateProductStockApi: {
        key: 'updateProductStockApi',
        noun: 'product',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...StockUpdateRequest.fields(),
            ],
            outputFields: [
                ...ProductStock.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/products/{product_id}/stock'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...StockUpdateRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductStockApi', response.json);
                    return results;
                })
            },
            sample: samples['ProductStockSample']
        }
    },
}
