const samples = require('../samples/TenantSettingsApi');
const PluginError = require('../models/PluginError');
const TenantSettings = require('../models/TenantSettings');
const UpdateTenantSettings = require('../models/UpdateTenantSettings');
const utils = require('../utils/utils');

module.exports = {
    getTenantSettings: {
        key: 'getTenantSettings',
        noun: 'tenant_settings',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...TenantSettings.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/settings/tenant'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantSettings', response.json);
                    return results;
                })
            },
            sample: samples['TenantSettingsSample']
        }
    },
    updateTenantSettings: {
        key: 'updateTenantSettings',
        noun: 'tenant_settings',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...UpdateTenantSettings.fields(),
            ],
            outputFields: [
                ...TenantSettings.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/settings/tenant'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateTenantSettings.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTenantSettings', response.json);
                    return results;
                })
            },
            sample: samples['TenantSettingsSample']
        }
    },
}
