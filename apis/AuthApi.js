const samples = require('../samples/AuthApi');
const AcceptInviteRequest = require('../models/AcceptInviteRequest');
const AuthResponse = require('../models/AuthResponse');
const ForgotPasswordRequest = require('../models/ForgotPasswordRequest');
const LoginRequest = require('../models/LoginRequest');
const MagicLinkRequest = require('../models/MagicLinkRequest');
const MagicLinkVerifyRequest = require('../models/MagicLinkVerifyRequest');
const RegisterRequest = require('../models/RegisterRequest');
const ResetPasswordRequest = require('../models/ResetPasswordRequest');
const TotpEnableRequest = require('../models/TotpEnableRequest');
const TotpSetupResponse = require('../models/TotpSetupResponse');
const VerifyEmailRequest = require('../models/VerifyEmailRequest');
const utils = require('../utils/utils');

module.exports = {
    acceptInvite: {
        key: 'acceptInvite',
        noun: 'auth',
        display: {
            label: 'Accept an invite: create the account (or reuse an existing one) and join the inviting tenant. The invite token proves control of the mailbox.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...AcceptInviteRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/accept-invite'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...AcceptInviteRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'acceptInvite', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    forgotPassword: {
        key: 'forgotPassword',
        noun: 'auth',
        display: {
            label: 'Send a password reset email to the user',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ForgotPasswordRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/forgot-password'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ForgotPasswordRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'forgotPassword', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    login: {
        key: 'login',
        noun: 'auth',
        display: {
            label: 'Authenticate a user with email + password (optional TOTP)',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...LoginRequest.fields(),
            ],
            outputFields: [
                ...AuthResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/login'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...LoginRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'login', response.json);
                    return results;
                })
            },
            sample: samples['AuthResponseSample']
        }
    },
    logout: {
        key: 'logout',
        noun: 'auth',
        display: {
            label: 'Log out the current user (kills the assay session)',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/logout'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'logout', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    magicLinkLogin: {
        key: 'magicLinkLogin',
        noun: 'auth',
        display: {
            label: 'Request a magic link login (sends an email with a one-time link)',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...MagicLinkRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/magic-link'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...MagicLinkRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'magicLinkLogin', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    magicLinkVerify: {
        key: 'magicLinkVerify',
        noun: 'auth',
        display: {
            label: 'Verify a magic link token and log the user in',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...MagicLinkVerifyRequest.fields(),
            ],
            outputFields: [
                ...AuthResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/magic-link/verify'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...MagicLinkVerifyRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'magicLinkVerify', response.json);
                    return results;
                })
            },
            sample: samples['AuthResponseSample']
        }
    },
    register: {
        key: 'register',
        noun: 'auth',
        display: {
            label: 'Register a new user account',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...RegisterRequest.fields(),
            ],
            outputFields: [
                ...AuthResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/register'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...RegisterRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'register', response.json);
                    return results;
                })
            },
            sample: samples['AuthResponseSample']
        }
    },
    resetPassword: {
        key: 'resetPassword',
        noun: 'auth',
        display: {
            label: 'Reset the user&#39;s password using a reset token',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ResetPasswordRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/reset-password'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ResetPasswordRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'resetPassword', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    totpEnable: {
        key: 'totpEnable',
        noun: 'auth',
        display: {
            label: 'Enable TOTP two-factor authentication by verifying a code',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TotpEnableRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/totp/enable'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...TotpEnableRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'totpEnable', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    totpSetup: {
        key: 'totpSetup',
        noun: 'auth',
        display: {
            label: 'Set up TOTP two-factor authentication (generates secret + backup codes)',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...TotpSetupResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/totp/setup'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'totpSetup', response.json);
                    return results;
                })
            },
            sample: samples['TotpSetupResponseSample']
        }
    },
    verifyEmail: {
        key: 'verifyEmail',
        noun: 'auth',
        display: {
            label: 'Verify a user&#39;s email address using a verification token',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...VerifyEmailRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/auth/verify-email'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...VerifyEmailRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'verifyEmail', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
