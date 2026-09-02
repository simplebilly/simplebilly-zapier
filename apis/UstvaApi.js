const samples = require('../samples/UstvaApi');
const JahresUstErgebnis = require('../models/JahresUstErgebnis');
const UstvaErgebnis = require('../models/UstvaErgebnis');
const utils = require('../utils/utils');

module.exports = {
    jahresustApi: {
        key: 'jahresustApi',
        noun: 'ustva',
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
                ...JahresUstErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/jahresust'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'jahresustApi', response.json);
                    return results;
                })
            },
            sample: samples['JahresUstErgebnisSample']
        }
    },
    ustvaApi: {
        key: 'ustvaApi',
        noun: 'ustva',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'zeitraum',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...UstvaErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/ustva'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'zeitraum': bundle.inputData?.['zeitraum'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'ustvaApi', response.json);
                    return results;
                })
            },
            sample: samples['UstvaErgebnisSample']
        }
    },
}
