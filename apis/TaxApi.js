const samples = require('../samples/TaxApi');
const TaxRateCreate = require('../models/TaxRateCreate');
const utils = require('../utils/utils');

module.exports = {
    createTaxRate: {
        key: 'createTaxRate',
        noun: 'tax',
        display: {
            label: 'Create a tax rate (&#x60;admin:settings&#x60;).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TaxRateCreate.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/tax-rates'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...TaxRateCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTaxRate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteTaxRate: {
        key: 'deleteTaxRate',
        noun: 'tax',
        display: {
            label: 'Delete a tax rate by id (&#x60;admin:settings&#x60;).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/tax-rates/{id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTaxRate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listTaxRates: {
        key: 'listTaxRates',
        noun: 'tax',
        display: {
            label: 'List the calling tenant&#39;s tax rates.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/tax-rates'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listTaxRates', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    updateTaxRate: {
        key: 'updateTaxRate',
        noun: 'tax',
        display: {
            label: 'Update a tax rate by id (&#x60;admin:settings&#x60;). Replaces all body fields.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...TaxRateCreate.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/tax-rates/{id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...TaxRateCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTaxRate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
