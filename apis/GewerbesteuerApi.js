const samples = require('../samples/GewerbesteuerApi');
const GewerbesteuerErgebnis = require('../models/GewerbesteuerErgebnis');
const utils = require('../utils/utils');

module.exports = {
    gewerbesteuerApi: {
        key: 'gewerbesteuerApi',
        noun: 'gewerbesteuer',
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
                    key: 'hebesatz',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'gewerbeertrag',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'country',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'gemeindeschluessel',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...GewerbesteuerErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/gewerbesteuer'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'hebesatz': bundle.inputData?.['hebesatz'],
                        'gewerbeertrag': bundle.inputData?.['gewerbeertrag'],
                        'country': bundle.inputData?.['country'],
                        'gemeindeschluessel': bundle.inputData?.['gemeindeschluessel'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'gewerbesteuerApi', response.json);
                    return results;
                })
            },
            sample: samples['GewerbesteuerErgebnisSample']
        }
    },
}
