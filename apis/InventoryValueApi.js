const samples = require('../samples/InventoryValueApi');
const CurrentInventoryValue = require('../models/CurrentInventoryValue');
const InventoryValuePoint = require('../models/InventoryValuePoint');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    getInventoryValueApi: {
        key: 'getInventoryValueApi',
        noun: 'inventory_value',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...CurrentInventoryValue.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/inventory-value'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInventoryValueApi', response.json);
                    return results;
                })
            },
            sample: samples['CurrentInventoryValueSample']
        }
    },
    recordInventoryValueApi: {
        key: 'recordInventoryValueApi',
        noun: 'inventory_value',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...InventoryValuePoint.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/inventory-value/record'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'recordInventoryValueApi', response.json);
                    return results;
                })
            },
            sample: samples['InventoryValuePointSample']
        }
    },
}
