const samples = require('../samples/InstituteApi');
const InstituteStatus = require('../models/InstituteStatus');
const utils = require('../utils/utils');

module.exports = {
    instituteStatusApi: {
        key: 'instituteStatusApi',
        noun: 'institute',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...InstituteStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/institute/status'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'instituteStatusApi', response.json);
                    return results;
                })
            },
            sample: samples['InstituteStatusSample']
        }
    },
}
