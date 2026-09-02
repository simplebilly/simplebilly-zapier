const samples = require('../samples/LegalDocumentApi');
const LegalDocument = require('../models/LegalDocument');
const LegalDocumentReset = require('../models/LegalDocumentReset');
const LegalDocumentUpsert = require('../models/LegalDocumentUpsert');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    getLegalDocuments: {
        key: 'getLegalDocuments',
        noun: 'legal_document',
        display: {
            label: 'List all legal documents of the tenant. Missing documents are seeded from the default texts (with tenant placeholders replaced) on first access.',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/legal/documents'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLegalDocuments', response.json);
                    return results;
                })
            },
            sample: samples['LegalDocumentSample']
        }
    },
    resetLegalDocuments: {
        key: 'resetLegalDocuments',
        noun: 'legal_document',
        display: {
            label: 'Restore default texts for all documents (or a single doc_type/lang when the optional filter is given). Returns the full tenant list.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...LegalDocumentReset.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/legal/documents/reset'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...LegalDocumentReset.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'resetLegalDocuments', response.json);
                    return results;
                })
            },
            sample: samples['LegalDocumentSample']
        }
    },
    upsertLegalDocuments: {
        key: 'upsertLegalDocuments',
        noun: 'legal_document',
        display: {
            label: 'Upsert legal documents per (doc_type, lang). Returns the full tenant list.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'LegalDocumentUpsert',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/legal/documents'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...LegalDocumentUpsert.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'upsertLegalDocuments', response.json);
                    return results;
                })
            },
            sample: samples['LegalDocumentSample']
        }
    },
}
