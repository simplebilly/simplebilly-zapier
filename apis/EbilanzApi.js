const samples = require('../samples/EbilanzApi');
const EBilanzReport = require('../models/EBilanzReport');
const utils = require('../utils/utils');

module.exports = {
    ebilanzReportApi: {
        key: 'ebilanzReportApi',
        noun: 'ebilanz',
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
                },
                {
                    key: 'date_from',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'date_to',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...EBilanzReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/ebilanz'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'ebilanzReportApi', response.json);
                    return results;
                })
            },
            sample: samples['EBilanzReportSample']
        }
    },
    ebilanzXbrlExportApi: {
        key: 'ebilanzXbrlExportApi',
        noun: 'ebilanz',
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
                },
                {
                    key: 'date_from',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'date_to',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/ebilanz/xbrl'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/xml',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'ebilanzXbrlExportApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
