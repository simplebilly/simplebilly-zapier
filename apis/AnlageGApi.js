const samples = require('../samples/AnlageGApi');
const AnlageGErgebnis = require('../models/AnlageGErgebnis');
const utils = require('../utils/utils');

module.exports = {
    anlageGApi: {
        key: 'anlageGApi',
        noun: 'anlage_g',
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
                ...AnlageGErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/anlage-g'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'anlageGApi', response.json);
                    return results;
                })
            },
            sample: samples['AnlageGErgebnisSample']
        }
    },
}
