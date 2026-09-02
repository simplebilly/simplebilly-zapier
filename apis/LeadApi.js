const samples = require('../samples/LeadApi');
const Lead = require('../models/Lead');
const LeadUpdate = require('../models/LeadUpdate');
const utils = require('../utils/utils');

module.exports = {
    listLeadsApi: {
        key: 'listLeadsApi',
        noun: 'lead',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'source',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/leads'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'status': bundle.inputData?.['status'],
                        'source': bundle.inputData?.['source'],
                        'search': bundle.inputData?.['search'],
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listLeadsApi', response.json);
                    return results;
                })
            },
            sample: samples['LeadSample']
        }
    },
    updateLeadApi: {
        key: 'updateLeadApi',
        noun: 'lead',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'lead_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...LeadUpdate.fields(),
            ],
            outputFields: [
                ...Lead.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/leads/{lead_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...LeadUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateLeadApi', response.json);
                    return results;
                })
            },
            sample: samples['LeadSample']
        }
    },
}
