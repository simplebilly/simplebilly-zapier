const samples = require('../samples/PaymentConditionApi');
const PaymentCondition = require('../models/PaymentCondition');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    listPaymentConditionsApi: {
        key: 'listPaymentConditionsApi',
        noun: 'payment_condition',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/payment-conditions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPaymentConditionsApi', response.json);
                    return results;
                })
            },
            sample: samples['PaymentConditionSample']
        }
    },
}
