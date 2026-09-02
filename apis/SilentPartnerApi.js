const samples = require('../samples/SilentPartnerApi');
const PluginError = require('../models/PluginError');
const SilentPartner = require('../models/SilentPartner');
const SilentPartnerCreate = require('../models/SilentPartnerCreate');
const SilentPartnerUpdate = require('../models/SilentPartnerUpdate');
const utils = require('../utils/utils');

module.exports = {
    createSilentPartner: {
        key: 'createSilentPartner',
        noun: 'silent_partner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SilentPartnerCreate.fields(),
            ],
            outputFields: [
                ...SilentPartner.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/silent-partners'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SilentPartnerCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSilentPartner', response.json);
                    return results;
                })
            },
            sample: samples['SilentPartnerSample']
        }
    },
    deleteSilentPartner: {
        key: 'deleteSilentPartner',
        noun: 'silent_partner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/silent-partners/{id}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSilentPartner', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSilentPartner: {
        key: 'getSilentPartner',
        noun: 'silent_partner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...SilentPartner.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/silent-partners/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSilentPartner', response.json);
                    return results;
                })
            },
            sample: samples['SilentPartnerSample']
        }
    },
    getSilentPartners: {
        key: 'getSilentPartners',
        noun: 'silent_partner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'include_deleted',
                    label: 'Soft-delete entities: set true to include rows with &#x60;deleted_at&#x60; set.',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/silent-partners/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'search': bundle.inputData?.['search'],
                        'include_deleted': bundle.inputData?.['include_deleted'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSilentPartners', response.json);
                    return results;
                })
            },
            sample: samples['SilentPartnerSample']
        }
    },
    updateSilentPartner: {
        key: 'updateSilentPartner',
        noun: 'silent_partner',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...SilentPartnerUpdate.fields(),
            ],
            outputFields: [
                ...SilentPartner.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/silent-partners/{id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SilentPartnerUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSilentPartner', response.json);
                    return results;
                })
            },
            sample: samples['SilentPartnerSample']
        }
    },
}
