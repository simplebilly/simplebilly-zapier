const samples = require('../samples/CustomerGroupApi');
const AnyType = require('../models/AnyType');
const CustomerGroup = require('../models/CustomerGroup');
const CustomerGroupCreate = require('../models/CustomerGroupCreate');
const CustomerGroupUpdate = require('../models/CustomerGroupUpdate');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    addGroupMembers: {
        key: 'addGroupMembers',
        noun: 'customer_group',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'customer_group_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...CustomerGroup.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups/{customer_group_id}/members'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addGroupMembers', response.json);
                    return results;
                })
            },
            sample: samples['CustomerGroupSample']
        }
    },
    createCustomerGroup: {
        key: 'createCustomerGroup',
        noun: 'customer_group',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CustomerGroupCreate.fields(),
            ],
            outputFields: [
                ...CustomerGroup.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CustomerGroupCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCustomerGroup', response.json);
                    return results;
                })
            },
            sample: samples['CustomerGroupSample']
        }
    },
    deleteCustomerGroup: {
        key: 'deleteCustomerGroup',
        noun: 'customer_group',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'customer_group_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups/{customer_group_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCustomerGroup', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCustomerGroup: {
        key: 'getCustomerGroup',
        noun: 'customer_group',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'customer_group_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...CustomerGroup.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups/{customer_group_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCustomerGroup', response.json);
                    return results;
                })
            },
            sample: samples['CustomerGroupSample']
        }
    },
    listCustomerGroups: {
        key: 'listCustomerGroups',
        noun: 'customer_group',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listCustomerGroups', response.json);
                    return results;
                })
            },
            sample: samples['CustomerGroupSample']
        }
    },
    updateCustomerGroup: {
        key: 'updateCustomerGroup',
        noun: 'customer_group',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'customer_group_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...CustomerGroupUpdate.fields(),
            ],
            outputFields: [
                ...CustomerGroup.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/customer-groups/{customer_group_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CustomerGroupUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCustomerGroup', response.json);
                    return results;
                })
            },
            sample: samples['CustomerGroupSample']
        }
    },
}
