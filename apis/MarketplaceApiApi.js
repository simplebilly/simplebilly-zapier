const samples = require('../samples/MarketplaceApiApi');
const CreateConnectionRequest = require('../models/CreateConnectionRequest');
const MarketplaceConnection = require('../models/MarketplaceConnection');
const OAuthAuthorizeRequest = require('../models/OAuthAuthorizeRequest');
const OAuthAuthorizeResponse = require('../models/OAuthAuthorizeResponse');
const OAuthCallbackRequest = require('../models/OAuthCallbackRequest');
const PlatformInfo = require('../models/PlatformInfo');
const SyncLog = require('../models/SyncLog');
const SyncSummary = require('../models/SyncSummary');
const UpdateConnectionRequest = require('../models/UpdateConnectionRequest');
const UpdateSyncDirectionRequest = require('../models/UpdateSyncDirectionRequest');
const utils = require('../utils/utils');

module.exports = {
    createConnectionApi: {
        key: 'createConnectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Create a new connection (for API-key based platforms)',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...CreateConnectionRequest.fields(),
            ],
            outputFields: [
                ...MarketplaceConnection.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateConnectionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createConnectionApi', response.json);
                    return results;
                })
            },
            sample: samples['MarketplaceConnectionSample']
        }
    },
    deleteConnectionApi: {
        key: 'deleteConnectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Soft-delete a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteConnectionApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getConnectionApi: {
        key: 'getConnectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Get a single connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...MarketplaceConnection.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getConnectionApi', response.json);
                    return results;
                })
            },
            sample: samples['MarketplaceConnectionSample']
        }
    },
    getSyncDirectionApi: {
        key: 'getSyncDirectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Get current sync direction configuration for a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}/directions'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSyncDirectionApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSyncLogsApi: {
        key: 'getSyncLogsApi',
        noun: 'marketplace_api',
        display: {
            label: 'Get sync logs for a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}/logs'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSyncLogsApi', response.json);
                    return results;
                })
            },
            sample: samples['SyncLogSample']
        }
    },
    listConnectionsApi: {
        key: 'listConnectionsApi',
        noun: 'marketplace_api',
        display: {
            label: 'List connections for the current tenant',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listConnectionsApi', response.json);
                    return results;
                })
            },
            sample: samples['MarketplaceConnectionSample']
        }
    },
    listPlatformsApi: {
        key: 'listPlatformsApi',
        noun: 'marketplace_api',
        display: {
            label: 'List all supported platforms',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/platforms'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPlatformsApi', response.json);
                    return results;
                })
            },
            sample: samples['PlatformInfoSample']
        }
    },
    oauthAuthorizeApi: {
        key: 'oauthAuthorizeApi',
        noun: 'marketplace_api',
        display: {
            label: 'OAuth: initiate authorization flow',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...OAuthAuthorizeRequest.fields(),
            ],
            outputFields: [
                ...OAuthAuthorizeResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/oauth/authorize'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OAuthAuthorizeRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'oauthAuthorizeApi', response.json);
                    return results;
                })
            },
            sample: samples['OAuthAuthorizeResponseSample']
        }
    },
    oauthCallbackApi: {
        key: 'oauthCallbackApi',
        noun: 'marketplace_api',
        display: {
            label: 'OAuth: handle callback after authorization',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...OAuthCallbackRequest.fields(),
            ],
            outputFields: [
                ...MarketplaceConnection.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/oauth/callback'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...OAuthCallbackRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'oauthCallbackApi', response.json);
                    return results;
                })
            },
            sample: samples['MarketplaceConnectionSample']
        }
    },
    triggerSyncApi: {
        key: 'triggerSyncApi',
        noun: 'marketplace_api',
        display: {
            label: 'Trigger sync for a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'sync_type',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'direction',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...SyncSummary.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}/sync'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'sync_type': bundle.inputData?.['sync_type'],
                        'direction': bundle.inputData?.['direction'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'triggerSyncApi', response.json);
                    return results;
                })
            },
            sample: samples['SyncSummarySample']
        }
    },
    updateConnectionApi: {
        key: 'updateConnectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Update a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...UpdateConnectionRequest.fields(),
            ],
            outputFields: [
                ...MarketplaceConnection.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateConnectionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateConnectionApi', response.json);
                    return results;
                })
            },
            sample: samples['MarketplaceConnectionSample']
        }
    },
    updateSyncDirectionApi: {
        key: 'updateSyncDirectionApi',
        noun: 'marketplace_api',
        display: {
            label: 'Update per-entity sync direction configuration for a connection',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...UpdateSyncDirectionRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/connections/{connection_id}/directions'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateSyncDirectionRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSyncDirectionApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    webhookReceiverApi: {
        key: 'webhookReceiverApi',
        noun: 'marketplace_api',
        display: {
            label: 'Webhook receiver',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'platform',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'connection_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/marketplace/webhook/{platform}/{connection_id}'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'webhookReceiverApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
