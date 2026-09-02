const samples = require('../samples/ImportRunnerApi');
const ImportJobStatus = require('../models/ImportJobStatus');
const ImportStartRequest = require('../models/ImportStartRequest');
const ImportStartResponse = require('../models/ImportStartResponse');
const ImportTestRequest = require('../models/ImportTestRequest');
const ImportTestResponse = require('../models/ImportTestResponse');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    getImportStatus: {
        key: 'getImportStatus',
        noun: 'import_runner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'job_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ImportJobStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/import/{job_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getImportStatus', response.json);
                    return results;
                })
            },
            sample: samples['ImportJobStatusSample']
        }
    },
    startImport: {
        key: 'startImport',
        noun: 'import_runner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ImportStartRequest.fields(),
            ],
            outputFields: [
                ...ImportStartResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/import/start'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ImportStartRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'startImport', response.json);
                    return results;
                })
            },
            sample: samples['ImportStartResponseSample']
        }
    },
    testImportConnection: {
        key: 'testImportConnection',
        noun: 'import_runner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ImportTestRequest.fields(),
            ],
            outputFields: [
                ...ImportTestResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/import/test'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ImportTestRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'testImportConnection', response.json);
                    return results;
                })
            },
            sample: samples['ImportTestResponseSample']
        }
    },
}
