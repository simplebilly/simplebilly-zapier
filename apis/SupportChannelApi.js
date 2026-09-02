const samples = require('../samples/SupportChannelApi');
const CreateChannelDto = require('../models/CreateChannelDto');
const SupportChannel = require('../models/SupportChannel');
const UpdateChannelDto = require('../models/UpdateChannelDto');
const utils = require('../utils/utils');

module.exports = {
    createChannelApi: {
        key: 'createChannelApi',
        noun: 'support_channel',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CreateChannelDto.fields(),
            ],
            outputFields: [
                ...SupportChannel.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/channels'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateChannelDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createChannelApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportChannelSample']
        }
    },
    deleteChannelApi: {
        key: 'deleteChannelApi',
        noun: 'support_channel',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'channel_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/channels/{channel_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteChannelApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listChannelsApi: {
        key: 'listChannelsApi',
        noun: 'support_channel',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/channels'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listChannelsApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportChannelSample']
        }
    },
    updateChannelApi: {
        key: 'updateChannelApi',
        noun: 'support_channel',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'channel_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...UpdateChannelDto.fields(),
            ],
            outputFields: [
                ...SupportChannel.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/support/channels/{channel_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateChannelDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateChannelApi', response.json);
                    return results;
                })
            },
            sample: samples['SupportChannelSample']
        }
    },
}
