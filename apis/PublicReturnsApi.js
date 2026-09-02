const samples = require('../samples/PublicReturnsApi');
const PluginError = require('../models/PluginError');
const PublicReturnRequest = require('../models/PublicReturnRequest');
const PublicReturnResponse = require('../models/PublicReturnResponse');
const PublicReturnStatusResponse = require('../models/PublicReturnStatusResponse');
const utils = require('../utils/utils');

module.exports = {
    getPublicReturnStatus: {
        key: 'getPublicReturnStatus',
        noun: 'public_returns',
        display: {
            label: 'Customer checks the status of a return (public, no auth). The return is only revealed when its linked order&#39;s email matches.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'email',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'returnNumber',
                    label: 'Either return_number or return_order_id must be provided.',
                    type: 'string',
                },
                {
                    key: 'returnOrderId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'orderNumber',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...PublicReturnStatusResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/returns/status'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'email': bundle.inputData?.['email'],
                        'returnNumber': bundle.inputData?.['returnNumber'],
                        'returnOrderId': bundle.inputData?.['returnOrderId'],
                        'orderNumber': bundle.inputData?.['orderNumber'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPublicReturnStatus', response.json);
                    return results;
                })
            },
            sample: samples['PublicReturnStatusResponseSample']
        }
    },
    listPublicReturns: {
        key: 'listPublicReturns',
        noun: 'public_returns',
        display: {
            label: 'List all returns for an order (public, no auth).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'orderNumber',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'email',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/returns/list'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'orderNumber': bundle.inputData?.['orderNumber'],
                        'email': bundle.inputData?.['email'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPublicReturns', response.json);
                    return results;
                })
            },
            sample: samples['PublicReturnStatusResponseSample']
        }
    },
    requestPublicReturn: {
        key: 'requestPublicReturn',
        noun: 'public_returns',
        display: {
            label: 'Customer requests a return for an order (public, no auth).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PublicReturnRequest.fields(),
            ],
            outputFields: [
                ...PublicReturnResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/returns/request'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PublicReturnRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'requestPublicReturn', response.json);
                    return results;
                })
            },
            sample: samples['PublicReturnResponseSample']
        }
    },
}
