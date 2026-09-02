const samples = require('../samples/KostenVorschauApi');
const KostenVorschau = require('../models/KostenVorschau');
const utils = require('../utils/utils');

module.exports = {
    kostenVorschauApi: {
        key: 'kostenVorschauApi',
        noun: 'kosten_vorschau',
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
                    key: 'month',
                    label: '',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
                ...KostenVorschau.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/kosten-vorschau'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'kostenVorschauApi', response.json);
                    return results;
                })
            },
            sample: samples['KostenVorschauSample']
        }
    },
}
