const samples = require('../samples/PaymentGatewayApi');
const AnyType = require('../models/AnyType');
const GatewayOAuthAuthorizeRequest = require('../models/GatewayOAuthAuthorizeRequest');
const GatewayOAuthAuthorizeResponse = require('../models/GatewayOAuthAuthorizeResponse');
const GatewayOAuthCallbackRequest = require('../models/GatewayOAuthCallbackRequest');
const PaymentGateway = require('../models/PaymentGateway');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createPaymentGatewayApi: {
        key: 'createPaymentGatewayApi',
        noun: 'payment_gateway',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...PaymentGateway.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPaymentGatewayApi', response.json);
                    return results;
                })
            },
            sample: samples['PaymentGatewaySample']
        }
    },
    deletePaymentGatewayApi: {
        key: 'deletePaymentGatewayApi',
        noun: 'payment_gateway',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'gateway_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways/{gateway_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePaymentGatewayApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listPaymentGatewaysApi: {
        key: 'listPaymentGatewaysApi',
        noun: 'payment_gateway',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPaymentGatewaysApi', response.json);
                    return results;
                })
            },
            sample: samples['PaymentGatewaySample']
        }
    },
    oauthAuthorizeApi: {
        key: 'oauthAuthorizeApi',
        noun: 'payment_gateway',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...GatewayOAuthAuthorizeRequest.fields(),
            ],
            outputFields: [
                ...GatewayOAuthAuthorizeResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways/oauth/authorize'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GatewayOAuthAuthorizeRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'oauthAuthorizeApi', response.json);
                    return results;
                })
            },
            sample: samples['GatewayOAuthAuthorizeResponseSample']
        }
    },
    oauthCallbackApi: {
        key: 'oauthCallbackApi',
        noun: 'payment_gateway',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...GatewayOAuthCallbackRequest.fields(),
            ],
            outputFields: [
                ...PaymentGateway.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways/oauth/callback'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GatewayOAuthCallbackRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'oauthCallbackApi', response.json);
                    return results;
                })
            },
            sample: samples['PaymentGatewaySample']
        }
    },
    updatePaymentGatewayApi: {
        key: 'updatePaymentGatewayApi',
        noun: 'payment_gateway',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'gateway_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...PaymentGateway.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-gateways/{gateway_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePaymentGatewayApi', response.json);
                    return results;
                })
            },
            sample: samples['PaymentGatewaySample']
        }
    },
}
