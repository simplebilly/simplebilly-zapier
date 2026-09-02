const samples = require('../samples/WarehouseApi');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const Warehouse = require('../models/Warehouse');
const utils = require('../utils/utils');

module.exports = {
    createWarehouse: {
        key: 'createWarehouse',
        noun: 'warehouse',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...Warehouse.fields(),
            ],
            outputFields: [
                ...Warehouse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...Warehouse.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWarehouse', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseSample']
        }
    },
    deleteWarehouse: {
        key: 'deleteWarehouse',
        noun: 'warehouse',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWarehouse', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getWarehouse: {
        key: 'getWarehouse',
        noun: 'warehouse',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Warehouse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWarehouse', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseSample']
        }
    },
    listWarehouses: {
        key: 'listWarehouses',
        noun: 'warehouse',
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
                    key: 'is_active',
                    label: '',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/'),
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
                        'is_active': bundle.inputData?.['is_active'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listWarehouses', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseSample']
        }
    },
    updateWarehouse: {
        key: 'updateWarehouse',
        noun: 'warehouse',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'warehouse_id',
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
                ...Warehouse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateWarehouse', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseSample']
        }
    },
}
