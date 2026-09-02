const samples = require('../samples/ProductAttributeApi');
const PluginError = require('../models/PluginError');
const ProductAttribute = require('../models/ProductAttribute');
const ProductAttributeCreate = require('../models/ProductAttributeCreate');
const ProductAttributeUpdate = require('../models/ProductAttributeUpdate');
const utils = require('../utils/utils');

module.exports = {
    createProductAttribute: {
        key: 'createProductAttribute',
        noun: 'product_attribute',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ProductAttributeCreate.fields(),
            ],
            outputFields: [
                ...ProductAttribute.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/product-attributes'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductAttributeCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProductAttribute', response.json);
                    return results;
                })
            },
            sample: samples['ProductAttributeSample']
        }
    },
    deleteProductAttribute: {
        key: 'deleteProductAttribute',
        noun: 'product_attribute',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'attribute_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/product-attributes/{attribute_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProductAttribute', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getProductAttribute: {
        key: 'getProductAttribute',
        noun: 'product_attribute',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'attribute_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProductAttribute.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/product-attributes/{attribute_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProductAttribute', response.json);
                    return results;
                })
            },
            sample: samples['ProductAttributeSample']
        }
    },
    listProductAttributes: {
        key: 'listProductAttributes',
        noun: 'product_attribute',
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
                    key: 'product_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'is_filterable',
                    label: '',
                    type: 'boolean',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/product-attributes/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'product_id': bundle.inputData?.['product_id'],
                        'is_filterable': bundle.inputData?.['is_filterable'],
                        'search': bundle.inputData?.['search'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listProductAttributes', response.json);
                    return results;
                })
            },
            sample: samples['ProductAttributeSample']
        }
    },
    updateProductAttribute: {
        key: 'updateProductAttribute',
        noun: 'product_attribute',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'attribute_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ProductAttributeUpdate.fields(),
            ],
            outputFields: [
                ...ProductAttribute.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/product-attributes/{attribute_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ProductAttributeUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductAttribute', response.json);
                    return results;
                })
            },
            sample: samples['ProductAttributeSample']
        }
    },
}
