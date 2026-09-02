const samples = require('../samples/WarehouseStockApi');
const PluginError = require('../models/PluginError');
const StockAdjustment = require('../models/StockAdjustment');
const WarehouseStock = require('../models/WarehouseStock');
const utils = require('../utils/utils');

module.exports = {
    createWarehouseStock: {
        key: 'createWarehouseStock',
        noun: 'warehouse_stock',
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
                ...StockAdjustment.fields(),
            ],
            outputFields: [
                ...WarehouseStock.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}/stock'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...StockAdjustment.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWarehouseStock', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseStockSample']
        }
    },
    deleteWarehouseStock: {
        key: 'deleteWarehouseStock',
        noun: 'warehouse_stock',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}/stock/{product_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWarehouseStock', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listWarehouseStock: {
        key: 'listWarehouseStock',
        noun: 'warehouse_stock',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}/stock'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listWarehouseStock', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseStockSample']
        }
    },
    updateWarehouseStock: {
        key: 'updateWarehouseStock',
        noun: 'warehouse_stock',
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
                    key: 'product_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...StockAdjustment.fields(),
            ],
            outputFields: [
                ...WarehouseStock.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/warehouses/{warehouse_id}/stock/{product_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...StockAdjustment.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateWarehouseStock', response.json);
                    return results;
                })
            },
            sample: samples['WarehouseStockSample']
        }
    },
}
