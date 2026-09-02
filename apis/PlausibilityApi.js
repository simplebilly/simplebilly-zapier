const samples = require('../samples/PlausibilityApi');
const PlausibilityReport = require('../models/PlausibilityReport');
const utils = require('../utils/utils');

module.exports = {
    plausibilityCheckApi: {
        key: 'plausibilityCheckApi',
        noun: 'plausibility',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'date_from',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'date_to',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...PlausibilityReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/plausibility'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'plausibilityCheckApi', response.json);
                    return results;
                })
            },
            sample: samples['PlausibilityReportSample']
        }
    },
}
