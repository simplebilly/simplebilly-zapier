const samples = require('../samples/AnlageSApi');
const AnlageSErgebnis = require('../models/AnlageSErgebnis');
const utils = require('../utils/utils');

module.exports = {
    anlageSApi: {
        key: 'anlageSApi',
        noun: 'anlage_s',
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
                ...AnlageSErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/anlage-s'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'anlageSApi', response.json);
                    return results;
                })
            },
            sample: samples['AnlageSErgebnisSample']
        }
    },
}
