const samples = require('../samples/SuitabilityApi');
const PluginError = require('../models/PluginError');
const SuitabilityRequest = require('../models/SuitabilityRequest');
const SuitabilityResult = require('../models/SuitabilityResult');
const utils = require('../utils/utils');

module.exports = {
    shippingSuitabilityApi: {
        key: 'shippingSuitabilityApi',
        noun: 'suitability',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SuitabilityRequest.fields(),
            ],
            outputFields: [
                ...SuitabilityResult.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipping/suitability'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SuitabilityRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'shippingSuitabilityApi', response.json);
                    return results;
                })
            },
            sample: samples['SuitabilityResultSample']
        }
    },
}
