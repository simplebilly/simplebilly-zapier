const samples = require('../samples/AiApi');
const AiConfigDto = require('../models/AiConfigDto');
const AiSuggestion = require('../models/AiSuggestion');
const AiSuggestionRequest = require('../models/AiSuggestionRequest');
const AiWorkerConfig = require('../models/AiWorkerConfig');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    aiSuggestApi: {
        key: 'aiSuggestApi',
        noun: 'ai',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...AiSuggestionRequest.fields(),
            ],
            outputFields: [
                ...AiSuggestion.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/ai/suggest'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AiSuggestionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aiSuggestApi', response.json);
                    return results;
                })
            },
            sample: samples['AiSuggestionSample']
        }
    },
    createWorkerApi: {
        key: 'createWorkerApi',
        noun: 'ai',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...AiConfigDto.fields(),
            ],
            outputFields: [
                ...AiWorkerConfig.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/ai/workers'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AiConfigDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWorkerApi', response.json);
                    return results;
                })
            },
            sample: samples['AiWorkerConfigSample']
        }
    },
    listWorkersApi: {
        key: 'listWorkersApi',
        noun: 'ai',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/ai/workers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listWorkersApi', response.json);
                    return results;
                })
            },
            sample: samples['AiWorkerConfigSample']
        }
    },
    runWorkerApi: {
        key: 'runWorkerApi',
        noun: 'ai',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'worker_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AiSuggestionRequest.fields(),
            ],
            outputFields: [
                ...AiSuggestion.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/ai/workers/{worker_id}/run'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AiSuggestionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'runWorkerApi', response.json);
                    return results;
                })
            },
            sample: samples['AiSuggestionSample']
        }
    },
}
