const samples = require('../samples/ShippingApi');
const PluginError = require('../models/PluginError');
const ProviderInfo = require('../models/ProviderInfo');
const RateRequest = require('../models/RateRequest');
const RateResponse = require('../models/RateResponse');
const ShippingCredentials = require('../models/ShippingCredentials');
const utils = require('../utils/utils');

module.exports = {
    getCredentialsApi: {
        key: 'getCredentialsApi',
        noun: 'shipping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ShippingCredentials.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping/credentials'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCredentialsApi', response.json);
                    return results;
                })
            },
            sample: samples['ShippingCredentialsSample']
        }
    },
    getRatesApi: {
        key: 'getRatesApi',
        noun: 'shipping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...RateRequest.fields(),
            ],
            outputFields: [
                ...RateResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping/rates'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...RateRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getRatesApi', response.json);
                    return results;
                })
            },
            sample: samples['RateResponseSample']
        }
    },
    listProvidersApi: {
        key: 'listProvidersApi',
        noun: 'shipping',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping/providers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listProvidersApi', response.json);
                    return results;
                })
            },
            sample: samples['ProviderInfoSample']
        }
    },
    saveCredentialsApi: {
        key: 'saveCredentialsApi',
        noun: 'shipping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ShippingCredentials.fields(),
            ],
            outputFields: [
                ...ShippingCredentials.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping/credentials'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ShippingCredentials.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'saveCredentialsApi', response.json);
                    return results;
                })
            },
            sample: samples['ShippingCredentialsSample']
        }
    },
}
