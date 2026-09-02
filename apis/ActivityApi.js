const samples = require('../samples/ActivityApi');
const Activity = require('../models/Activity');
const ActivityStatusUpdate = require('../models/ActivityStatusUpdate');
const AnyType = require('../models/AnyType');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createActivity: {
        key: 'createActivity',
        noun: 'activity',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...Activity.fields(),
            ],
            outputFields: [
                ...Activity.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...Activity.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createActivity', response.json);
                    return results;
                })
            },
            sample: samples['ActivitySample']
        }
    },
    deleteActivity: {
        key: 'deleteActivity',
        noun: 'activity',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'activity_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities/{activity_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteActivity', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getActivity: {
        key: 'getActivity',
        noun: 'activity',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'activity_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Activity.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities/{activity_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getActivity', response.json);
                    return results;
                })
            },
            sample: samples['ActivitySample']
        }
    },
    listActivities: {
        key: 'listActivities',
        noun: 'activity',
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
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'contactId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'activityType',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'assignedTo',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'overdueOnly',
                    label: 'Only show overdue follow-ups.',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'contactId': bundle.inputData?.['contactId'],
                        'activityType': bundle.inputData?.['activityType'],
                        'status': bundle.inputData?.['status'],
                        'assignedTo': bundle.inputData?.['assignedTo'],
                        'overdueOnly': bundle.inputData?.['overdueOnly'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listActivities', response.json);
                    return results;
                })
            },
            sample: samples['ActivitySample']
        }
    },
    updateActivity: {
        key: 'updateActivity',
        noun: 'activity',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'activity_id',
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
                ...Activity.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities/{activity_id}'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateActivity', response.json);
                    return results;
                })
            },
            sample: samples['ActivitySample']
        }
    },
    updateActivityStatus: {
        key: 'updateActivityStatus',
        noun: 'activity',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'activity_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ActivityStatusUpdate.fields(),
            ],
            outputFields: [
                ...Activity.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/activities/{activity_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ActivityStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateActivityStatus', response.json);
                    return results;
                })
            },
            sample: samples['ActivitySample']
        }
    },
}
