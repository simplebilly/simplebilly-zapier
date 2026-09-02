const samples = require('../samples/DatevApi');
const DatevBookingPreview = require('../models/DatevBookingPreview');
const DatevExportResponse = require('../models/DatevExportResponse');
const utils = require('../utils/utils');

module.exports = {
    datevExportApi: {
        key: 'datevExportApi',
        noun: 'datev',
        display: {
            label: 'Export bookkeeping data as DATEV CSV',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'account_schema',
                    label: '',
                    type: 'string',
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
                ...DatevExportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/datev/export'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'account_schema': bundle.inputData?.['account_schema'],
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'datevExportApi', response.json);
                    return results;
                })
            },
            sample: samples['DatevExportResponseSample']
        }
    },
    datevPreviewApi: {
        key: 'datevPreviewApi',
        noun: 'datev',
        display: {
            label: 'Exported_datev_bookings: returns formed bookings for review',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'account_schema',
                    label: '',
                    type: 'string',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/datev/preview'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'account_schema': bundle.inputData?.['account_schema'],
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'datevPreviewApi', response.json);
                    return results;
                })
            },
            sample: samples['DatevBookingPreviewSample']
        }
    },
}
