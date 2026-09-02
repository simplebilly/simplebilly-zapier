const samples = require('../samples/OssReportApi');
const OssReport = require('../models/OssReport');
const utils = require('../utils/utils');

module.exports = {
    ossReportApi: {
        key: 'ossReportApi',
        noun: 'oss_report',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...OssReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/oss'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'ossReportApi', response.json);
                    return results;
                })
            },
            sample: samples['OssReportSample']
        }
    },
}
