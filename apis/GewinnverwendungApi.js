const samples = require('../samples/GewinnverwendungApi');
const GewinnverwendungsExportResponse = require('../models/GewinnverwendungsExportResponse');
const GewinnverwendungsReport = require('../models/GewinnverwendungsReport');
const utils = require('../utils/utils');

module.exports = {
    gewinnverwendungApi: {
        key: 'gewinnverwendungApi',
        noun: 'gewinnverwendung',
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
                ...GewinnverwendungsReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/gewinnverwendung'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'gewinnverwendungApi', response.json);
                    return results;
                })
            },
            sample: samples['GewinnverwendungsReportSample']
        }
    },
    gewinnverwendungExportApi: {
        key: 'gewinnverwendungExportApi',
        noun: 'gewinnverwendung',
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
                ...GewinnverwendungsExportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/gewinnverwendung/export'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'gewinnverwendungExportApi', response.json);
                    return results;
                })
            },
            sample: samples['GewinnverwendungsExportResponseSample']
        }
    },
}
