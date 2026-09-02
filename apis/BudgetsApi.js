const samples = require('../samples/BudgetsApi');
const Budget = require('../models/Budget');
const BudgetErgebnis = require('../models/BudgetErgebnis');
const BudgetGoalRequest = require('../models/BudgetGoalRequest');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    budgetsApi: {
        key: 'budgetsApi',
        noun: 'budgets',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'year',
                    label: '',
                    type: 'integer',
                    required: true,
                },
                {
                    key: 'month',
                    label: '',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
                ...BudgetErgebnis.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/budgets'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'budgetsApi', response.json);
                    return results;
                })
            },
            sample: samples['BudgetErgebnisSample']
        }
    },
    upsertBudgetGoalApi: {
        key: 'upsertBudgetGoalApi',
        noun: 'budgets',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'category',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...BudgetGoalRequest.fields(),
            ],
            outputFields: [
                ...Budget.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/budgets/goals/{category}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...BudgetGoalRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'upsertBudgetGoalApi', response.json);
                    return results;
                })
            },
            sample: samples['BudgetSample']
        }
    },
}
