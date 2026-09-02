const samples = require('../samples/BookkeepingApi');
const AllocatePaymentRequest = require('../models/AllocatePaymentRequest');
const BWAReport = require('../models/BWAReport');
const CashflowReport = require('../models/CashflowReport');
const DunningResult = require('../models/DunningResult');
const ElsterStatus = require('../models/ElsterStatus');
const Invoice = require('../models/Invoice');
const LiquidityPosition = require('../models/LiquidityPosition');
const PluginError = require('../models/PluginError');
const Verfahrensdokumentation = require('../models/Verfahrensdokumentation');
const utils = require('../utils/utils');

module.exports = {
    allocatePaymentApi: {
        key: 'allocatePaymentApi',
        noun: 'bookkeeping',
        display: {
            label: 'Allocate a payment to an invoice',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...AllocatePaymentRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payments/allocate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AllocatePaymentRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'allocatePaymentApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    bwaReportApi: {
        key: 'bwaReportApi',
        noun: 'bookkeeping',
        display: {
            label: 'Get BWA (Betriebswirtschaftliche Auswertung) report',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'year',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'month',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...BWAReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/bwa'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'bwaReportApi', response.json);
                    return results;
                })
            },
            sample: samples['BWAReportSample']
        }
    },
    elsterStatusApi: {
        key: 'elsterStatusApi',
        noun: 'bookkeeping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ElsterStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/elster/status'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'elsterStatusApi', response.json);
                    return results;
                })
            },
            sample: samples['ElsterStatusSample']
        }
    },
    elsterValidateApi: {
        key: 'elsterValidateApi',
        noun: 'bookkeeping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'zeitraum',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/ustva/elster-validate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'zeitraum': bundle.inputData?.['zeitraum'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'elsterValidateApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    elsterXmlApi: {
        key: 'elsterXmlApi',
        noun: 'bookkeeping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'zeitraum',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/ustva/elster-xml'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'zeitraum': bundle.inputData?.['zeitraum'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'elsterXmlApi', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCashflow: {
        key: 'getCashflow',
        noun: 'bookkeeping',
        display: {
            label: 'GET /api/v1/bookkeeping/cashflow Returns operating, investing, and financing cashflow for the given period.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'year',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'month',
                    label: '',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...CashflowReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/cashflow'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'year': bundle.inputData?.['year'],
                        'month': bundle.inputData?.['month'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCashflow', response.json);
                    return results;
                })
            },
            sample: samples['CashflowReportSample']
        }
    },
    getLiquidity: {
        key: 'getLiquidity',
        noun: 'bookkeeping',
        display: {
            label: 'GET /api/v1/bookkeeping/liquidity Returns current liquidity position with ratios.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...LiquidityPosition.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/liquidity'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLiquidity', response.json);
                    return results;
                })
            },
            sample: samples['LiquidityPositionSample']
        }
    },
    getOpenInvoicesApi: {
        key: 'getOpenInvoicesApi',
        noun: 'bookkeeping',
        display: {
            label: 'Get open invoices for a customer',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'customer_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payments/open-invoices/{customer_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOpenInvoicesApi', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceSample']
        }
    },
    getVerfahrensdokumentation: {
        key: 'getVerfahrensdokumentation',
        noun: 'bookkeeping',
        display: {
            label: 'GET /api/v1/bookkeeping/verfahrensdokumentation Returns the complete compliance catalog of all documented modules.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...Verfahrensdokumentation.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/verfahrensdokumentation'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getVerfahrensdokumentation', response.json);
                    return results;
                })
            },
            sample: samples['VerfahrensdokumentationSample']
        }
    },
    runDunningApi: {
        key: 'runDunningApi',
        noun: 'bookkeeping',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...DunningResult.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/dunning'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'runDunningApi', response.json);
                    return results;
                })
            },
            sample: samples['DunningResultSample']
        }
    },
}
