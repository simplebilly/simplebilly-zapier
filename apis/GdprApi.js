const samples = require('../samples/GdprApi');
const AnyType = require('../models/AnyType');
const ApiResponse_GdprExport = require('../models/ApiResponse_GdprExport');
const DpaAcceptRequest = require('../models/DpaAcceptRequest');
const DpaStatus = require('../models/DpaStatus');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    acceptDpa: {
        key: 'acceptDpa',
        noun: 'gdpr',
        display: {
            label: 'Record DPA acceptance: sets dpa_accepted_at/by/version on the tenant settings row (created with company-type defaults if missing).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...DpaAcceptRequest.fields(),
            ],
            outputFields: [
                ...DpaStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/dpa'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...DpaAcceptRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'acceptDpa', response.json);
                    return results;
                })
            },
            sample: samples['DpaStatusSample']
        }
    },
    accountErasure: {
        key: 'accountErasure',
        noun: 'gdpr',
        display: {
            label: 'Erase ALL personal data of the tenant (TOS §11: deletion 90 days after termination).',
            description: 'Anonymizes every contact, anonymizes personal fields on bookkeeping records (orders/invoices/payments keep amounts and dates for GoBD), removes the tenant linkage of the (global, saasy-framework) users and marks the erasure on &#x60;tenant_settings.gdpr_erased_at&#x60;. No row is physically deleted. The audit triggers on the touched tables record who/when.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/account-erasure'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'accountErasure', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    erasureContact: {
        key: 'erasureContact',
        noun: 'gdpr',
        display: {
            label: 'Anonymize + soft-delete a contact: personal attributes are cleared, the record itself is kept for GoBD retention (Art. 17(3)(e) DSGVO). The audit trigger on &#x60;contacts&#x60; already records who/when.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/erasure/{contact_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'erasureContact', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    exportContactData: {
        key: 'exportContactData',
        noun: 'gdpr',
        display: {
            label: 'Art. 15 data-subject access export for a contact.',
            description: 'Returns the contact itself plus the tenant-scoped rows linked to it.  ## Relations The &#x60;customers&#x60;/&#x60;orders&#x60;/&#x60;invoices&#x60;/&#x60;payments&#x60; tables have no FK to &#x60;contacts&#x60;; they are linked through the &#x60;customer_id&#x60; column, which per the app&#39;s conventions holds one of: - the admin customer&#39;s &#x60;customer_id&#x60; (a UUID, often the same value as   the contact&#39;s &#x60;contact_id&#x60;/&#x60;customer_number&#x60;), - the buyer&#39;s email for shop orders, or - the marketplace&#39;s external customer id for plugin orders.  The export therefore matches the contact&#39;s identifiers (&#x60;contact_id&#x60;, &#x60;customer_number&#x60;, &#x60;external_id&#x60;, &#x60;email&#x60;) plus any resolved customer ids against &#x60;customer_id&#x60;. &#x60;delivery_notes&#x60; and &#x60;customer_communications&#x60; reference contacts directly via &#x60;contact_id&#x60;. Soft-deleted rows are included (their data is still processed and retained for GoBD). Relations that genuinely do not exist for a contact stay empty but the key is always present.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contact_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/export/{contact_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exportContactData', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    exportGdpr: {
        key: 'exportGdpr',
        noun: 'gdpr',
        display: {
            label: 'Export the current user&#39;s personal data (GDPR Art. 15/20).',
            description: 'No admin permission required: a user always exports their own data.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ApiResponse_GdprExport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/export'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exportGdpr', response.json);
                    return results;
                })
            },
            sample: samples['ApiResponse_GdprExportSample']
        }
    },
    getDpa: {
        key: 'getDpa',
        noun: 'gdpr',
        display: {
            label: 'Current DPA acceptance status (from tenant_settings).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...DpaStatus.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/gdpr/dpa'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDpa', response.json);
                    return results;
                })
            },
            sample: samples['DpaStatusSample']
        }
    },
}
