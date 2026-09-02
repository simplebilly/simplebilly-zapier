const samples = require('../samples/PriceTierApi');
const PluginError = require('../models/PluginError');
const PriceTier = require('../models/PriceTier');
const PriceTierCreate = require('../models/PriceTierCreate');
const PriceTierUpdate = require('../models/PriceTierUpdate');
const ResolvedPriceResponse = require('../models/ResolvedPriceResponse');
const utils = require('../utils/utils');

module.exports = {
    createPriceTier: {
        key: 'createPriceTier',
        noun: 'price_tier',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PriceTierCreate.fields(),
            ],
            outputFields: [
                ...PriceTier.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PriceTierCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPriceTier', response.json);
                    return results;
                })
            },
            sample: samples['PriceTierSample']
        }
    },
    deletePriceTier: {
        key: 'deletePriceTier',
        noun: 'price_tier',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'price_tier_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers/{price_tier_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePriceTier', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getPriceTier: {
        key: 'getPriceTier',
        noun: 'price_tier',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'price_tier_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PriceTier.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers/{price_tier_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceTier', response.json);
                    return results;
                })
            },
            sample: samples['PriceTierSample']
        }
    },
    getResolvedPrice: {
        key: 'getResolvedPrice',
        noun: 'price_tier',
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
                    key: 'quantity',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'contactId',
                    label: 'Contact used to match customer-group-scoped tiers.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ResolvedPriceResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers/resolved'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'productId': bundle.inputData?.['productId'],
                        'quantity': bundle.inputData?.['quantity'],
                        'contactId': bundle.inputData?.['contactId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getResolvedPrice', response.json);
                    return results;
                })
            },
            sample: samples['ResolvedPriceResponseSample']
        }
    },
    listPriceTiers: {
        key: 'listPriceTiers',
        noun: 'price_tier',
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
                    key: 'customer_group_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers/'),
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
                        'customer_group_id': bundle.inputData?.['customer_group_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPriceTiers', response.json);
                    return results;
                })
            },
            sample: samples['PriceTierSample']
        }
    },
    updatePriceTier: {
        key: 'updatePriceTier',
        noun: 'price_tier',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'price_tier_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PriceTierUpdate.fields(),
            ],
            outputFields: [
                ...PriceTier.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/price-tiers/{price_tier_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PriceTierUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePriceTier', response.json);
                    return results;
                })
            },
            sample: samples['PriceTierSample']
        }
    },
}
