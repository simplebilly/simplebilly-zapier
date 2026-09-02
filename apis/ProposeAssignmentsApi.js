const samples = require('../samples/ProposeAssignmentsApi');
const ProposedAssignment = require('../models/ProposedAssignment');
const utils = require('../utils/utils');

module.exports = {
    proposeAssignmentsApi: {
        key: 'proposeAssignmentsApi',
        noun: 'propose_assignments',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'min_confidence',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/propose-assignments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'min_confidence': bundle.inputData?.['min_confidence'],
                        'customer_id': bundle.inputData?.['customer_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'proposeAssignmentsApi', response.json);
                    return results;
                })
            },
            sample: samples['ProposedAssignmentSample']
        }
    },
}
