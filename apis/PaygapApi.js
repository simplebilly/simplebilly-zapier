const samples = require('../samples/PaygapApi');
const PayGapExportResponse = require('../models/PayGapExportResponse');
const PayGapInfoResponse = require('../models/PayGapInfoResponse');
const PayGapReport = require('../models/PayGapReport');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    paygapAuskunftApi: {
        key: 'paygapAuskunftApi',
        noun: 'paygap',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'employee_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PayGapInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/paygap/auskunft/{employee_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'paygapAuskunftApi', response.json);
                    return results;
                })
            },
            sample: samples['PayGapInfoResponseSample']
        }
    },
    paygapExportApi: {
        key: 'paygapExportApi',
        noun: 'paygap',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...PayGapExportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/paygap/export'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'paygapExportApi', response.json);
                    return results;
                })
            },
            sample: samples['PayGapExportResponseSample']
        }
    },
    paygapReportApi: {
        key: 'paygapReportApi',
        noun: 'paygap',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...PayGapReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/paygap/report'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'paygapReportApi', response.json);
                    return results;
                })
            },
            sample: samples['PayGapReportSample']
        }
    },
}
