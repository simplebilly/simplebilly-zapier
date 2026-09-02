const samples = require('../samples/StockMovementApi');
const PluginError = require('../models/PluginError');
const StockMovement = require('../models/StockMovement');
const utils = require('../utils/utils');

module.exports = {
    getStockMovement: {
        key: 'getStockMovement',
        noun: 'stock_movement',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'movement_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...StockMovement.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-movements/{movement_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getStockMovement', response.json);
                    return results;
                })
            },
            sample: samples['StockMovementSample']
        }
    },
    listStockMovements: {
        key: 'listStockMovements',
        noun: 'stock_movement',
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
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'productId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'warehouseId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'movementType',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'from',
                    label: 'Only movements on or after this date (inclusive).',
                    type: 'string',
                },
                {
                    key: 'to',
                    label: 'Only movements on or before this date (inclusive).',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/stock-movements/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'productId': bundle.inputData?.['productId'],
                        'warehouseId': bundle.inputData?.['warehouseId'],
                        'movementType': bundle.inputData?.['movementType'],
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listStockMovements', response.json);
                    return results;
                })
            },
            sample: samples['StockMovementSample']
        }
    },
}
