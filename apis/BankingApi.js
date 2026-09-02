const samples = require('../samples/BankingApi');
const BankLookup = require('../models/BankLookup');
const HebesatzLookup = require('../models/HebesatzLookup');
const utils = require('../utils/utils');

module.exports = {
    bankLookupApi: {
        key: 'bankLookupApi',
        noun: 'banking',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'iban',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BankLookup.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/banking/lookup'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'iban': bundle.inputData?.['iban'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'bankLookupApi', response.json);
                    return results;
                })
            },
            sample: samples['BankLookupSample']
        }
    },
    bankTransactionsApi: {
        key: 'bankTransactionsApi',
        noun: 'banking',
        display: {
            label: '',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/banking/transactions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'bankTransactionsApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    hebesatzLookupApi: {
        key: 'hebesatzLookupApi',
        noun: 'banking',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'gemeindeschluessel',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'plz',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'stichtag',
                    label: 'Stichtag for validity (YYYY-MM-DD); defaults to today. Picks row where valid_from &lt;&#x3D; date &lt;&#x3D; valid_to.',
                    type: 'string',
                },
                {
                    key: 'country_code',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/hebesatz'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'gemeindeschluessel': bundle.inputData?.['gemeindeschluessel'],
                        'plz': bundle.inputData?.['plz'],
                        'name': bundle.inputData?.['name'],
                        'stichtag': bundle.inputData?.['stichtag'],
                        'country_code': bundle.inputData?.['country_code'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'hebesatzLookupApi', response.json);
                    return results;
                })
            },
            sample: samples['HebesatzLookupSample']
        }
    },
}
