const samples = require('../samples/SearchApi');
const AnyType = require('../models/AnyType');
const utils = require('../utils/utils');

module.exports = {
    globalSearch: {
        key: 'globalSearch',
        noun: 'search',
        display: {
            label: 'GET /api/v1/search?q&#x3D;...',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'q',
                    label: 'Search text (min 2 chars)',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/search'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'q': bundle.inputData?.['q'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'globalSearch', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    myPermissions: {
        key: 'myPermissions',
        noun: 'search',
        display: {
            label: 'GET /api/v1/me/permissions — resolved permissions from the auth token, used by the frontend to show/hide admin navigation.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/me/permissions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'myPermissions', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
}
