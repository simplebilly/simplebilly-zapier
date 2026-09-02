const samples = require('../samples/DatevImportApi');
const AnyType = require('../models/AnyType');
const DatevImportResponse = require('../models/DatevImportResponse');
const utils = require('../utils/utils');

module.exports = {
    datevImportApi: {
        key: 'datevImportApi',
        noun: 'datev_import',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...DatevImportResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/datev/import'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'datevImportApi', response.json);
                    return results;
                })
            },
            sample: samples['DatevImportResponseSample']
        }
    },
}
