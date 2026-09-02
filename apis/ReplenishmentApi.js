const samples = require('../samples/ReplenishmentApi');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const ReplenishmentResponse = require('../models/ReplenishmentResponse');
const utils = require('../utils/utils');

module.exports = {
    applyReplenishments: {
        key: 'applyReplenishments',
        noun: 'replenishment',
        display: {
            label: 'Create one draft stock transfer per (source → target) pair carrying all suggested product lines for that pair.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'targetWarehouseId',
                    label: 'Warehouse to be replenished. Defaults to the tenant&#39;s default warehouse.',
                    type: 'string',
                },
                {
                    key: 'sourceWarehouseId',
                    label: 'Restrict source warehouses to this id.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/replenishments/apply'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'targetWarehouseId': bundle.inputData?.['targetWarehouseId'],
                        'sourceWarehouseId': bundle.inputData?.['sourceWarehouseId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'applyReplenishments', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    getReplenishments: {
        key: 'getReplenishments',
        noun: 'replenishment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'targetWarehouseId',
                    label: 'Warehouse to be replenished. Defaults to the tenant&#39;s default warehouse.',
                    type: 'string',
                },
                {
                    key: 'sourceWarehouseId',
                    label: 'Restrict source warehouses to this id.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ReplenishmentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/replenishments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'targetWarehouseId': bundle.inputData?.['targetWarehouseId'],
                        'sourceWarehouseId': bundle.inputData?.['sourceWarehouseId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReplenishments', response.json);
                    return results;
                })
            },
            sample: samples['ReplenishmentResponseSample']
        }
    },
}
