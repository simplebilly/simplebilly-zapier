const samples = require('../samples/StockTransferApi');
const PluginError = require('../models/PluginError');
const StockTransfer = require('../models/StockTransfer');
const StockTransferStatusUpdate = require('../models/StockTransferStatusUpdate');
const utils = require('../utils/utils');

module.exports = {
    createStockTransfer: {
        key: 'createStockTransfer',
        noun: 'stock_transfer',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...StockTransfer.fields(),
            ],
            outputFields: [
                ...StockTransfer.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-transfers'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...StockTransfer.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createStockTransfer', response.json);
                    return results;
                })
            },
            sample: samples['StockTransferSample']
        }
    },
    deleteStockTransfer: {
        key: 'deleteStockTransfer',
        noun: 'stock_transfer',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'stock_transfer_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-transfers/{stock_transfer_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteStockTransfer', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getStockTransfer: {
        key: 'getStockTransfer',
        noun: 'stock_transfer',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'stock_transfer_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...StockTransfer.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-transfers/{stock_transfer_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getStockTransfer', response.json);
                    return results;
                })
            },
            sample: samples['StockTransferSample']
        }
    },
    listStockTransfers: {
        key: 'listStockTransfers',
        noun: 'stock_transfer',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-transfers/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listStockTransfers', response.json);
                    return results;
                })
            },
            sample: samples['StockTransferSample']
        }
    },
    updateStockTransferStatus: {
        key: 'updateStockTransferStatus',
        noun: 'stock_transfer',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'stock_transfer_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...StockTransferStatusUpdate.fields(),
            ],
            outputFields: [
                ...StockTransfer.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-transfers/{stock_transfer_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...StockTransferStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateStockTransferStatus', response.json);
                    return results;
                })
            },
            sample: samples['StockTransferSample']
        }
    },
}
