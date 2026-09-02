const samples = require('../samples/FristenApi');
const FristenErgebnis = require('../models/FristenErgebnis');
const utils = require('../utils/utils');

module.exports = {
    fristenApi: {
        key: 'fristenApi',
        noun: 'fristen',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'bundesland',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'voranmeldungsrhythmus',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'dauerfristverlaengerung',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'est_aktiv',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'gewst_aktiv',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'monate',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...FristenErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/fristen'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'bundesland': bundle.inputData?.['bundesland'],
                        'voranmeldungsrhythmus': bundle.inputData?.['voranmeldungsrhythmus'],
                        'dauerfristverlaengerung': bundle.inputData?.['dauerfristverlaengerung'],
                        'est_aktiv': bundle.inputData?.['est_aktiv'],
                        'gewst_aktiv': bundle.inputData?.['gewst_aktiv'],
                        'monate': bundle.inputData?.['monate'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'fristenApi', response.json);
                    return results;
                })
            },
            sample: samples['FristenErgebnisSample']
        }
    },
}
