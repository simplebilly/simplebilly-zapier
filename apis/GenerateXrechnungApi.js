const samples = require('../samples/GenerateXrechnungApi');
const XRechnungResponse = require('../models/XRechnungResponse');
const utils = require('../utils/utils');

module.exports = {
    generateXrechnungApi: {
        key: 'generateXrechnungApi',
        noun: 'generate_xrechnung',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'supplier_name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_street',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_city',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_zip',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_country',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_vat_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...XRechnungResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/invoices/{id}/xrechnung'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'supplier_name': bundle.inputData?.['supplier_name'],
                        'supplier_street': bundle.inputData?.['supplier_street'],
                        'supplier_city': bundle.inputData?.['supplier_city'],
                        'supplier_zip': bundle.inputData?.['supplier_zip'],
                        'supplier_country': bundle.inputData?.['supplier_country'],
                        'supplier_vat_id': bundle.inputData?.['supplier_vat_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'generateXrechnungApi', response.json);
                    return results;
                })
            },
            sample: samples['XRechnungResponseSample']
        }
    },
}
