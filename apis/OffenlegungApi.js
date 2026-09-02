const samples = require('../samples/OffenlegungApi');
const OffenlegungReport = require('../models/OffenlegungReport');
const utils = require('../utils/utils');

module.exports = {
    offenlegungApi: {
        key: 'offenlegungApi',
        noun: 'offenlegung',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...OffenlegungReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/offenlegung'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'offenlegungApi', response.json);
                    return results;
                })
            },
            sample: samples['OffenlegungReportSample']
        }
    },
}
