const samples = require('../samples/TrainingAssignmentApi');
const PluginError = require('../models/PluginError');
const TrainingAssignment = require('../models/TrainingAssignment');
const TrainingAssignmentCreate = require('../models/TrainingAssignmentCreate');
const TrainingAssignmentUpdate = require('../models/TrainingAssignmentUpdate');
const utils = require('../utils/utils');

module.exports = {
    createTrainingAssignment: {
        key: 'createTrainingAssignment',
        noun: 'training_assignment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TrainingAssignmentCreate.fields(),
            ],
            outputFields: [
                ...TrainingAssignment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/training-assignments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TrainingAssignmentCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTrainingAssignment', response.json);
                    return results;
                })
            },
            sample: samples['TrainingAssignmentSample']
        }
    },
    deleteTrainingAssignment: {
        key: 'deleteTrainingAssignment',
        noun: 'training_assignment',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/training-assignments/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTrainingAssignment', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getTrainingAssignment: {
        key: 'getTrainingAssignment',
        noun: 'training_assignment',
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
                ...TrainingAssignment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/training-assignments/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrainingAssignment', response.json);
                    return results;
                })
            },
            sample: samples['TrainingAssignmentSample']
        }
    },
    getTrainingAssignments: {
        key: 'getTrainingAssignments',
        noun: 'training_assignment',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/training-assignments/'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrainingAssignments', response.json);
                    return results;
                })
            },
            sample: samples['TrainingAssignmentSample']
        }
    },
    updateTrainingAssignment: {
        key: 'updateTrainingAssignment',
        noun: 'training_assignment',
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
                ...TrainingAssignmentUpdate.fields(),
            ],
            outputFields: [
                ...TrainingAssignment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/training-assignments/{id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TrainingAssignmentUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTrainingAssignment', response.json);
                    return results;
                })
            },
            sample: samples['TrainingAssignmentSample']
        }
    },
}
