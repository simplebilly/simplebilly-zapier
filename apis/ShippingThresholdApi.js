const samples = require('../samples/ShippingThresholdApi');
const DeliverableResponse = require('../models/DeliverableResponse');
const PluginError = require('../models/PluginError');
const ShippingThreshold = require('../models/ShippingThreshold');
const ShippingThresholdCreate = require('../models/ShippingThresholdCreate');
const ShippingThresholdUpdate = require('../models/ShippingThresholdUpdate');
const utils = require('../utils/utils');

module.exports = {
    createShippingThreshold: {
        key: 'createShippingThreshold',
        noun: 'shipping_threshold',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ShippingThresholdCreate.fields(),
            ],
            outputFields: [
                ...ShippingThreshold.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ShippingThresholdCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createShippingThreshold', response.json);
                    return results;
                })
            },
            sample: samples['ShippingThresholdSample']
        }
    },
    deleteShippingThreshold: {
        key: 'deleteShippingThreshold',
        noun: 'shipping_threshold',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'threshold_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds/{threshold_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteShippingThreshold', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getDeliverable: {
        key: 'getDeliverable',
        noun: 'shipping_threshold',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'productId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'warehouseId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...DeliverableResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds/deliverable'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'productId': bundle.inputData?.['productId'],
                        'warehouseId': bundle.inputData?.['warehouseId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDeliverable', response.json);
                    return results;
                })
            },
            sample: samples['DeliverableResponseSample']
        }
    },
    getShippingThreshold: {
        key: 'getShippingThreshold',
        noun: 'shipping_threshold',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'threshold_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ShippingThreshold.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds/{threshold_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getShippingThreshold', response.json);
                    return results;
                })
            },
            sample: samples['ShippingThresholdSample']
        }
    },
    listShippingThresholds: {
        key: 'listShippingThresholds',
        noun: 'shipping_threshold',
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
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'is_active',
                    label: '',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds/'),
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
                        'warehouse_id': bundle.inputData?.['warehouse_id'],
                        'is_active': bundle.inputData?.['is_active'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listShippingThresholds', response.json);
                    return results;
                })
            },
            sample: samples['ShippingThresholdSample']
        }
    },
    updateShippingThreshold: {
        key: 'updateShippingThreshold',
        noun: 'shipping_threshold',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'threshold_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ShippingThresholdUpdate.fields(),
            ],
            outputFields: [
                ...ShippingThreshold.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping-thresholds/{threshold_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ShippingThresholdUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateShippingThreshold', response.json);
                    return results;
                })
            },
            sample: samples['ShippingThresholdSample']
        }
    },
}
