const samples = require('../samples/CreateSepaDirectDebitApi');
const SepaDirectDebitResponse = require('../models/SepaDirectDebitResponse');
const utils = require('../utils/utils');

module.exports = {
    createSepaDirectDebitApi: {
        key: 'createSepaDirectDebitApi',
        noun: 'create_sepa_direct_debit',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'creditor_name',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'creditor_iban',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'creditor_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'mandate_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'mandate_date',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'debtor_name',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'debtor_iban',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'amount',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'collection_date',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'creditor_bic',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'debtor_bic',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'description',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...SepaDirectDebitResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/sepa-direct-debit'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'creditor_name': bundle.inputData?.['creditor_name'],
                        'creditor_iban': bundle.inputData?.['creditor_iban'],
                        'creditor_id': bundle.inputData?.['creditor_id'],
                        'mandate_id': bundle.inputData?.['mandate_id'],
                        'mandate_date': bundle.inputData?.['mandate_date'],
                        'debtor_name': bundle.inputData?.['debtor_name'],
                        'debtor_iban': bundle.inputData?.['debtor_iban'],
                        'amount': bundle.inputData?.['amount'],
                        'collection_date': bundle.inputData?.['collection_date'],
                        'creditor_bic': bundle.inputData?.['creditor_bic'],
                        'debtor_bic': bundle.inputData?.['debtor_bic'],
                        'description': bundle.inputData?.['description'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSepaDirectDebitApi', response.json);
                    return results;
                })
            },
            sample: samples['SepaDirectDebitResponseSample']
        }
    },
}
