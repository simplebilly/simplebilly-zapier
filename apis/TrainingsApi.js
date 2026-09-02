const samples = require('../samples/TrainingsApi');
const HrTrainingOverview = require('../models/HrTrainingOverview');
const MyTrainingItem = require('../models/MyTrainingItem');
const PluginError = require('../models/PluginError');
const SubmitResultDto = require('../models/SubmitResultDto');
const SubmitResultResponse = require('../models/SubmitResultResponse');
const TrainingContent = require('../models/TrainingContent');
const utils = require('../utils/utils');

module.exports = {
    getMyTrainings: {
        key: 'getMyTrainings',
        noun: 'trainings',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/trainings/me'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyTrainings', response.json);
                    return results;
                })
            },
            sample: samples['MyTrainingItemSample']
        }
    },
    getTrainingContent: {
        key: 'getTrainingContent',
        noun: 'trainings',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'code',
                    label: 'Training code, e.g. data_privacy',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...TrainingContent.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/trainings/content/{code}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrainingContent', response.json);
                    return results;
                })
            },
            sample: samples['TrainingContentSample']
        }
    },
    getTrainingOverview: {
        key: 'getTrainingOverview',
        noun: 'trainings',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/trainings/overview'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrainingOverview', response.json);
                    return results;
                })
            },
            sample: samples['HrTrainingOverviewSample']
        }
    },
    submitTrainingResult: {
        key: 'submitTrainingResult',
        noun: 'trainings',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...SubmitResultDto.fields(),
            ],
            outputFields: [
                ...SubmitResultResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/trainings/submit-result'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...SubmitResultDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'submitTrainingResult', response.json);
                    return results;
                })
            },
            sample: samples['SubmitResultResponseSample']
        }
    },
}
