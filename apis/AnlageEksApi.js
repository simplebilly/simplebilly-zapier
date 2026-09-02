const samples = require('../samples/AnlageEksApi');
const EksErgebnis = require('../models/EksErgebnis');
const utils = require('../utils/utils');

module.exports = {
    eksApi: {
        key: 'eksApi',
        noun: 'anlage_eks',
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
                ...EksErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/eks'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'eksApi', response.json);
                    return results;
                })
            },
            sample: samples['EksErgebnisSample']
        }
    },
}
