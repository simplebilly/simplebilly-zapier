const samples = require('../samples/PeppolApi');
const PeppolResponse = require('../models/PeppolResponse');
const utils = require('../utils/utils');

module.exports = {
    peppolApi: {
        key: 'peppolApi',
        noun: 'peppol',
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
            ],
            outputFields: [
                ...PeppolResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/invoices/{id}/peppol'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'peppolApi', response.json);
                    return results;
                })
            },
            sample: samples['PeppolResponseSample']
        }
    },
}
