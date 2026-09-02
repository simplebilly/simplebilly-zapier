const samples = require('../samples/KstApi');
const KstErgebnis = require('../models/KstErgebnis');
const utils = require('../utils/utils');

module.exports = {
    kstApi: {
        key: 'kstApi',
        noun: 'kst',
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
                {
                    key: 'gewinn',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...KstErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/kst'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'gewinn': bundle.inputData?.['gewinn'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'kstApi', response.json);
                    return results;
                })
            },
            sample: samples['KstErgebnisSample']
        }
    },
}
