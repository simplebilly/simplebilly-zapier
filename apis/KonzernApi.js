const samples = require('../samples/KonzernApi');
const KonzernExportResponse = require('../models/KonzernExportResponse');
const KonzernStatus = require('../models/KonzernStatus');
const utils = require('../utils/utils');

module.exports = {
    konzernExportApi: {
        key: 'konzernExportApi',
        noun: 'konzern',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'year',
                    label: '',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
                ...KonzernExportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/konzern/status/export'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'konzernExportApi', response.json);
                    return results;
                })
            },
            sample: samples['KonzernExportResponseSample']
        }
    },
    konzernStatusApi: {
        key: 'konzernStatusApi',
        noun: 'konzern',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'year',
                    label: '',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
                ...KonzernStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/konzern/status'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'konzernStatusApi', response.json);
                    return results;
                })
            },
            sample: samples['KonzernStatusSample']
        }
    },
}
