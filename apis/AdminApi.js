const samples = require('../samples/AdminApi');
const MirrorTriggerResponse = require('../models/MirrorTriggerResponse');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    triggerMirror: {
        key: 'triggerMirror',
        noun: 'admin',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...MirrorTriggerResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/admin/storage/mirror'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'triggerMirror', response.json);
                    return results;
                })
            },
            sample: samples['MirrorTriggerResponseSample']
        }
    },
}
