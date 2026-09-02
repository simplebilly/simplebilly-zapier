const samples = require('../samples/ReportsApi');
const BilanzReport = require('../models/BilanzReport');
const GuVReport = require('../models/GuVReport');
const KontoReport = require('../models/KontoReport');
const UmsatzsteuerReport = require('../models/UmsatzsteuerReport');
const utils = require('../utils/utils');

module.exports = {
    bilanzReportApi: {
        key: 'bilanzReportApi',
        noun: 'reports',
        display: {
            label: 'Bilanz (Balance Sheet)',
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
                    key: 'month',
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
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...BilanzReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/reports/bilanz'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'bilanzReportApi', response.json);
                    return results;
                })
            },
            sample: samples['BilanzReportSample']
        }
    },
    guvReportApi: {
        key: 'guvReportApi',
        noun: 'reports',
        display: {
            label: 'Gewinn- und Verlustrechnung (P&amp;L statement)',
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
                    key: 'month',
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
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...GuVReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/reports/guv'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'guvReportApi', response.json);
                    return results;
                })
            },
            sample: samples['GuVReportSample']
        }
    },
    kontenansichtReportApi: {
        key: 'kontenansichtReportApi',
        noun: 'reports',
        display: {
            label: 'Kontenansicht (Account Overview)',
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
                    key: 'month',
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
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...KontoReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/reports/kontenansicht'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'kontenansichtReportApi', response.json);
                    return results;
                })
            },
            sample: samples['KontoReportSample']
        }
    },
    umsatzsteuerReportApi: {
        key: 'umsatzsteuerReportApi',
        noun: 'reports',
        display: {
            label: 'Umsatzsteuer-Voranmeldung (VAT report)',
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
                    key: 'month',
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
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...UmsatzsteuerReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/reports/umsatzsteuer'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'umsatzsteuerReportApi', response.json);
                    return results;
                })
            },
            sample: samples['UmsatzsteuerReportSample']
        }
    },
}
