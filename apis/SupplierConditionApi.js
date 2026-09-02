const samples = require('../samples/SupplierConditionApi');
const PluginError = require('../models/PluginError');
const SupplierCondition = require('../models/SupplierCondition');
const SupplierConditionCreate = require('../models/SupplierConditionCreate');
const SupplierConditionUpdate = require('../models/SupplierConditionUpdate');
const utils = require('../utils/utils');

module.exports = {
    createSupplierCondition: {
        key: 'createSupplierCondition',
        noun: 'supplier_condition',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SupplierConditionCreate.fields(),
            ],
            outputFields: [
                ...SupplierCondition.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-conditions'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SupplierConditionCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSupplierCondition', response.json);
                    return results;
                })
            },
            sample: samples['SupplierConditionSample']
        }
    },
    deleteSupplierCondition: {
        key: 'deleteSupplierCondition',
        noun: 'supplier_condition',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_condition_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-conditions/{supplier_condition_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSupplierCondition', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSupplierCondition: {
        key: 'getSupplierCondition',
        noun: 'supplier_condition',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_condition_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...SupplierCondition.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-conditions/{supplier_condition_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSupplierCondition', response.json);
                    return results;
                })
            },
            sample: samples['SupplierConditionSample']
        }
    },
    listSupplierConditions: {
        key: 'listSupplierConditions',
        noun: 'supplier_condition',
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
                    key: 'supplier_contact_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-conditions/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'supplier_contact_id': bundle.inputData?.['supplier_contact_id'],
                        'search': bundle.inputData?.['search'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listSupplierConditions', response.json);
                    return results;
                })
            },
            sample: samples['SupplierConditionSample']
        }
    },
    updateSupplierCondition: {
        key: 'updateSupplierCondition',
        noun: 'supplier_condition',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'supplier_condition_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...SupplierConditionUpdate.fields(),
            ],
            outputFields: [
                ...SupplierCondition.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/supplier-conditions/{supplier_condition_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SupplierConditionUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSupplierCondition', response.json);
                    return results;
                })
            },
            sample: samples['SupplierConditionSample']
        }
    },
}
