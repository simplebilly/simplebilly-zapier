const samples = require('../samples/GobdExportApi');
const GoBDExportResponse = require('../models/GoBDExportResponse');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    buchhalterCsvApi: {
        key: 'buchhalterCsvApi',
        noun: 'gobd_export',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'date_from',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'date_to',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...GoBDExportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/buchhalter-csv'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'buchhalterCsvApi', response.json);
                    return results;
                })
            },
            sample: samples['GoBDExportResponseSample']
        }
    },
    gobdExportApi: {
        key: 'gobdExportApi',
        noun: 'gobd_export',
        display: {
            label: 'GoBD/GDPdU export. Default: ZIP archive (&#x60;index.xml&#x60; + CSV tables, IDEA format). &#x60;?format&#x3D;csv&#x60; returns the legacy single-journal CSV as JSON.',
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
                {
                    key: 'format',
                    label: 'Export format: &#x60;zip&#x60; (default, full GDPdU/IDEA export) or &#x60;csv&#x60; (legacy single-journal CSV as JSON).',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/gobd'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/zip, application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'format': bundle.inputData?.['format'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'gobdExportApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
