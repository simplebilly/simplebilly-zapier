const samples = require('../samples/AutomationsApi');
const AutomationDto = require('../models/AutomationDto');
const UpdateAutomation = require('../models/UpdateAutomation');
const utils = require('../utils/utils');

module.exports = {
    listAutomations: {
        key: 'listAutomations',
        noun: 'automations',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/automations'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listAutomations', response.json);
                    return results;
                })
            },
            sample: samples['AutomationDtoSample']
        }
    },
    triggerAutomation: {
        key: 'triggerAutomation',
        noun: 'automations',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'key',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/automations/{key}/trigger'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'triggerAutomation', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    updateAutomation: {
        key: 'updateAutomation',
        noun: 'automations',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'key',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...UpdateAutomation.fields(),
            ],
            outputFields: [
                ...AutomationDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/automations/{key}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateAutomation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAutomation', response.json);
                    return results;
                })
            },
            sample: samples['AutomationDtoSample']
        }
    },
}
