const samples = require('../samples/BillingApi');
const ApiResponse_SubscriptionOverview = require('../models/ApiResponse_SubscriptionOverview');
const ApiResponse_Vec_Plan = require('../models/ApiResponse_Vec_Plan');
const QuotaOverride = require('../models/QuotaOverride');
const utils = require('../utils/utils');

module.exports = {
    getPlans: {
        key: 'getPlans',
        noun: 'billing',
        display: {
            label: 'All canonical plans (free/starter/business/enterprise) — the single source of truth lives in &#x60;crate::saasy::plans&#x60;, matching marketing.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_Vec_Plan.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/plans'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPlans', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_Vec_PlanSample']
        }
    },
    getQuotaApi: {
        key: 'getQuotaApi',
        noun: 'billing',
        display: {
            label: 'Effective limits + current usage for the calling tenant.',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/quota'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuotaApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSubscriptionApi: {
        key: 'getSubscriptionApi',
        noun: 'billing',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_SubscriptionOverview.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/subscription'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSubscriptionApi', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_SubscriptionOverviewSample']
        }
    },
    getUsageApi: {
        key: 'getUsageApi',
        noun: 'billing',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'meter',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/usage'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'meter': bundle.inputData?.['meter'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUsageApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    paddleSubscriptionWebhook: {
        key: 'paddleSubscriptionWebhook',
        noun: 'billing',
        display: {
            label: 'Paddle Billing subscription webhook. Verifies the &#x60;Paddle-Signature&#x60; header (HMAC-SHA256 over &#x60;\&quot;{ts}:{raw_body}\&quot;&#x60; with the webhook secret), then updates &#x60;billing_info&#x60; and &#x60;tenants.plan&#x60; for the tenant identified by the subscription &#x60;custom_data&#x60; (JSON &#x60;{\&quot;tenant_id\&quot;: \&quot;...\&quot;}&#x60; or a bare tenant UUID).',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/webhooks/paddle/subscription'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'paddleSubscriptionWebhook', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    putQuotaApi: {
        key: 'putQuotaApi',
        noun: 'billing',
        display: {
            label: 'Write the per-tenant quota override (&#x60;admin:settings&#x60;). An empty object clears the override.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...QuotaOverride.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/quota'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...QuotaOverride.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'putQuotaApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
