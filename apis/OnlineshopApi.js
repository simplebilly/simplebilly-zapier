const samples = require('../samples/OnlineshopApi');
const PluginError = require('../models/PluginError');
const SmtpConfig = require('../models/SmtpConfig');
const utils = require('../utils/utils');

module.exports = {
    getSmtpConfigApi: {
        key: 'getSmtpConfigApi',
        noun: 'onlineshop',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...SmtpConfig.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/settings/smtp'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSmtpConfigApi', response.json);
                    return results;
                })
            },
            sample: samples['SmtpConfigSample']
        }
    },
    saveSmtpConfigApi: {
        key: 'saveSmtpConfigApi',
        noun: 'onlineshop',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SmtpConfig.fields(),
            ],
            outputFields: [
                ...SmtpConfig.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/settings/smtp'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SmtpConfig.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'saveSmtpConfigApi', response.json);
                    return results;
                })
            },
            sample: samples['SmtpConfigSample']
        }
    },
}
