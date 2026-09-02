const samples = require('../samples/UserApi');
const ApiResponse_String = require('../models/ApiResponse_String');
const ApiResponse_Team = require('../models/ApiResponse_Team');
const ApiResponse_UserProfile = require('../models/ApiResponse_UserProfile');
const ApiResponse_Vec_Team = require('../models/ApiResponse_Vec_Team');
const ApiResponse_Vec_UserTenantInfo = require('../models/ApiResponse_Vec_UserTenantInfo');
const ChangePasswordRequest = require('../models/ChangePasswordRequest');
const InviteRequest = require('../models/InviteRequest');
const RemoveUserRequest = require('../models/RemoveUserRequest');
const TeamCreate = require('../models/TeamCreate');
const UpdateProfileRequest = require('../models/UpdateProfileRequest');
const utils = require('../utils/utils');

module.exports = {
    changePassword: {
        key: 'changePassword',
        noun: 'user',
        display: {
            label: 'Change the current user&#39;s password (requires the current password).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ChangePasswordRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/change-password'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ChangePasswordRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'changePassword', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    createTeam: {
        key: 'createTeam',
        noun: 'user',
        display: {
            label: 'Create a new team within the current tenant',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TeamCreate.fields(),
            ],
            outputFields: [
                ...ApiResponse_Team.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/teams'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TeamCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTeam', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_TeamSample']
        }
    },
    generateApiKey: {
        key: 'generateApiKey',
        noun: 'user',
        display: {
            label: 'Generate a new API key for the current user',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_String.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/api-key'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'generateApiKey', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_StringSample']
        }
    },
    inviteUser: {
        key: 'inviteUser',
        noun: 'user',
        display: {
            label: 'Invite a user to the current tenant/organization',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...InviteRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/invite'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...InviteRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'inviteUser', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    listTeams: {
        key: 'listTeams',
        noun: 'user',
        display: {
            label: 'List all teams in the current tenant',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_Vec_Team.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/teams'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listTeams', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_Vec_TeamSample']
        }
    },
    removeUserFromOrg: {
        key: 'removeUserFromOrg',
        noun: 'user',
        display: {
            label: 'Remove a user from the current organization',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...RemoveUserRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/remove'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...RemoveUserRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeUserFromOrg', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    updateProfile: {
        key: 'updateProfile',
        noun: 'user',
        display: {
            label: 'Update the current user&#39;s profile',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...UpdateProfileRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/profile'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...UpdateProfileRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProfile', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    userProfile: {
        key: 'userProfile',
        noun: 'user',
        display: {
            label: 'Get the current user&#39;s profile',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_UserProfile.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/profile'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'userProfile', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_UserProfileSample']
        }
    },
    userTenants: {
        key: 'userTenants',
        noun: 'user',
        display: {
            label: 'List all tenants (organizations) the current user belongs to',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_Vec_UserTenantInfo.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/user/tenants'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'userTenants', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_Vec_UserTenantInfoSample']
        }
    },
}
