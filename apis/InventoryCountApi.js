const samples = require('../samples/InventoryCountApi');
const AnyType = require('../models/AnyType');
const GenerateCountRequest = require('../models/GenerateCountRequest');
const InventoryCount = require('../models/InventoryCount');
const InventoryCountStatusUpdate = require('../models/InventoryCountStatusUpdate');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createInventoryCount: {
        key: 'createInventoryCount',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...InventoryCount.fields(),
            ],
            outputFields: [
                ...InventoryCount.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...InventoryCount.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInventoryCount', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
    deleteInventoryCount: {
        key: 'deleteInventoryCount',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'inventory_count_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/{inventory_count_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInventoryCount', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    generateInventoryCount: {
        key: 'generateInventoryCount',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...GenerateCountRequest.fields(),
            ],
            outputFields: [
                ...InventoryCount.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/generate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GenerateCountRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'generateInventoryCount', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
    getInventoryCount: {
        key: 'getInventoryCount',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'inventory_count_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InventoryCount.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/{inventory_count_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInventoryCount', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
    listInventoryCounts: {
        key: 'listInventoryCounts',
        noun: 'inventory_count',
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
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/'),
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
                        'warehouse_id': bundle.inputData?.['warehouse_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listInventoryCounts', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
    updateInventoryCount: {
        key: 'updateInventoryCount',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'inventory_count_id',
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
                ...InventoryCount.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/{inventory_count_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInventoryCount', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
    updateInventoryCountStatus: {
        key: 'updateInventoryCountStatus',
        noun: 'inventory_count',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'inventory_count_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InventoryCountStatusUpdate.fields(),
            ],
            outputFields: [
                ...InventoryCount.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/inventory-counts/{inventory_count_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...InventoryCountStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInventoryCountStatus', response.json);
                    return results;
                })
            },
            sample: samples['InventoryCountSample']
        }
    },
}
