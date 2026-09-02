const samples = require('../samples/InstituteProfileApi');
const InstituteProfile = require('../models/InstituteProfile');
const InstituteProfileUpdate = require('../models/InstituteProfileUpdate');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    getInstituteProfile: {
        key: 'getInstituteProfile',
        noun: 'institute_profile',
        display: {
            label: 'Current institute profile (created with defaults when missing).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...InstituteProfile.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/institute-profile'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInstituteProfile', response.json);
                    return results;
                })
            },
            sample: samples['InstituteProfileSample']
        }
    },
    updateInstituteProfile: {
        key: 'updateInstituteProfile',
        noun: 'institute_profile',
        display: {
            label: 'Update the institute profile (institute_type and/or kapitalmarktorientiert).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...InstituteProfileUpdate.fields(),
            ],
            outputFields: [
                ...InstituteProfile.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/institute-profile'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...InstituteProfileUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInstituteProfile', response.json);
                    return results;
                })
            },
            sample: samples['InstituteProfileSample']
        }
    },
}
