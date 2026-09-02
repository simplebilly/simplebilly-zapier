const samples = require('../samples/TimeEntriesApi');
const LaborCostRow = require('../models/LaborCostRow');
const PluginError = require('../models/PluginError');
const TimeEntryClockIn = require('../models/TimeEntryClockIn');
const TimeEntryClockOut = require('../models/TimeEntryClockOut');
const TimeEntryDto = require('../models/TimeEntryDto');
const utils = require('../utils/utils');

module.exports = {
    clockInTimeEntry: {
        key: 'clockInTimeEntry',
        noun: 'time_entries',
        display: {
            label: 'Clock in for the authenticated user (resolved via their employee profile).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TimeEntryClockIn.fields(),
            ],
            outputFields: [
                ...TimeEntryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/time-entries'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TimeEntryClockIn.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'clockInTimeEntry', response.json);
                    return results;
                })
            },
            sample: samples['TimeEntryDtoSample']
        }
    },
    clockOutTimeEntry: {
        key: 'clockOutTimeEntry',
        noun: 'time_entries',
        display: {
            label: 'Clock out an entry: the entry&#39;s owner, or anyone with &#x60;time_entries:write&#x60;.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...TimeEntryClockOut.fields(),
            ],
            outputFields: [
                ...TimeEntryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/time-entries/{id}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TimeEntryClockOut.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'clockOutTimeEntry', response.json);
                    return results;
                })
            },
            sample: samples['TimeEntryDtoSample']
        }
    },
    getLaborCosts: {
        key: 'getLaborCosts',
        noun: 'time_entries',
        display: {
            label: 'Labor-cost report: worked hours aggregated per employee / order / day, valued at the employee&#39;s hourly cost rate.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'from',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'to',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'group_by',
                    label: 'One of \&quot;employee\&quot;, \&quot;order\&quot; or \&quot;day\&quot;.',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/labor-costs'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                        'group_by': bundle.inputData?.['group_by'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLaborCosts', response.json);
                    return results;
                })
            },
            sample: samples['LaborCostRowSample']
        }
    },
    listTimeEntries: {
        key: 'listTimeEntries',
        noun: 'time_entries',
        display: {
            label: 'List time entries with optional date-range / active / employee filters.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'from',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'to',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'active',
                    label: 'Only currently running shifts (clock_in set, clock_out null).',
                    type: 'boolean',
                },
                {
                    key: 'employee_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/time-entries'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                        'active': bundle.inputData?.['active'],
                        'employee_id': bundle.inputData?.['employee_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listTimeEntries', response.json);
                    return results;
                })
            },
            sample: samples['TimeEntryDtoSample']
        }
    },
}
