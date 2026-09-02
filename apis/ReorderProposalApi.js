const samples = require('../samples/ReorderProposalApi');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const ReorderProposalResponse = require('../models/ReorderProposalResponse');
const utils = require('../utils/utils');

module.exports = {
    applyReorderProposal: {
        key: 'applyReorderProposal',
        noun: 'reorder_proposal',
        display: {
            label: 'Convert a reorder proposal into a draft purchase order.',
            description: 'Returns the created purchase order id. Suggested line items are generated with the current reorder quantity per product.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'configuredOnly',
                    label: 'Only include products with a reorder point configured (&#x60;min_stock&#x60;).',
                    type: 'boolean',
                },
                {
                    key: 'warehouseId',
                    label: 'Limit to a single warehouse id.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/reorder-proposals/apply'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'configuredOnly': bundle.inputData?.['configuredOnly'],
                        'warehouseId': bundle.inputData?.['warehouseId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'applyReorderProposal', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    getReorderProposal: {
        key: 'getReorderProposal',
        noun: 'reorder_proposal',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'configuredOnly',
                    label: 'Only include products with a reorder point configured (&#x60;min_stock&#x60;).',
                    type: 'boolean',
                },
                {
                    key: 'warehouseId',
                    label: 'Limit to a single warehouse id.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ReorderProposalResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/reorder-proposals'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'configuredOnly': bundle.inputData?.['configuredOnly'],
                        'warehouseId': bundle.inputData?.['warehouseId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReorderProposal', response.json);
                    return results;
                })
            },
            sample: samples['ReorderProposalResponseSample']
        }
    },
}
