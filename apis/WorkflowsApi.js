const samples = require('../samples/WorkflowsApi');
const PluginError = require('../models/PluginError');
const Workflow = require('../models/Workflow');
const WorkflowEnabledUpdate = require('../models/WorkflowEnabledUpdate');
const utils = require('../utils/utils');

module.exports = {
    listWorkflowsApi: {
        key: 'listWorkflowsApi',
        noun: 'workflows',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/workflows'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listWorkflowsApi', response.json);
                    return results;
                })
            },
            sample: samples['WorkflowSample']
        }
    },
    setWorkflowEnabledApi: {
        key: 'setWorkflowEnabledApi',
        noun: 'workflows',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'workflow_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...WorkflowEnabledUpdate.fields(),
            ],
            outputFields: [
                ...Workflow.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/workflows/{workflow_id}/enabled'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...WorkflowEnabledUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'setWorkflowEnabledApi', response.json);
                    return results;
                })
            },
            sample: samples['WorkflowSample']
        }
    },
}
