const samples = require('../samples/ListOpenItemsApi');
const OpenItem = require('../models/OpenItem');
const utils = require('../utils/utils');

module.exports = {
    listOpenItemsApi: {
        key: 'listOpenItemsApi',
        noun: 'list_open_items',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'reminder_level1_days',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'reminder_level2_days',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'reminder_level3_days',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'customer_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/open-items'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'reminder_level1_days': bundle.inputData?.['reminder_level1_days'],
                        'reminder_level2_days': bundle.inputData?.['reminder_level2_days'],
                        'reminder_level3_days': bundle.inputData?.['reminder_level3_days'],
                        'customer_id': bundle.inputData?.['customer_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listOpenItemsApi', response.json);
                    return results;
                })
            },
            sample: samples['OpenItemSample']
        }
    },
}
