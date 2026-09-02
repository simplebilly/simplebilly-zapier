const samples = require('../samples/DeliveryDateApi');
const AnyType = require('../models/AnyType');
const DeliveryDate = require('../models/DeliveryDate');
const DeliveryDateCreate = require('../models/DeliveryDateCreate');
const DeliveryDateStatusUpdate = require('../models/DeliveryDateStatusUpdate');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createDeliveryDate: {
        key: 'createDeliveryDate',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...DeliveryDateCreate.fields(),
            ],
            outputFields: [
                ...DeliveryDate.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...DeliveryDateCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createDeliveryDate', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryDateSample']
        }
    },
    deleteDeliveryDate: {
        key: 'deleteDeliveryDate',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'delivery_date_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/{delivery_date_id}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDeliveryDate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getDeliveryDate: {
        key: 'getDeliveryDate',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'delivery_date_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DeliveryDate.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/{delivery_date_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDeliveryDate', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryDateSample']
        }
    },
    getDeliveryPerformance: {
        key: 'getDeliveryPerformance',
        noun: 'delivery_date',
        display: {
            label: 'On-time performance summary: how many promised delivery dates were met within a period.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'orderNumber',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'from',
                    label: 'Only dates on or after this date.',
                    type: 'string',
                },
                {
                    key: 'to',
                    label: 'Only dates on or before this date.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/performance'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'orderNumber': bundle.inputData?.['orderNumber'],
                        'status': bundle.inputData?.['status'],
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDeliveryPerformance', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    listDeliveryDates: {
        key: 'listDeliveryDates',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'pageSize',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'orderNumber',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'from',
                    label: 'Only dates on or after this date.',
                    type: 'string',
                },
                {
                    key: 'to',
                    label: 'Only dates on or before this date.',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'pageSize': bundle.inputData?.['pageSize'],
                        'orderNumber': bundle.inputData?.['orderNumber'],
                        'status': bundle.inputData?.['status'],
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listDeliveryDates', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryDateSample']
        }
    },
    updateDeliveryDate: {
        key: 'updateDeliveryDate',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'delivery_date_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...DeliveryDate.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/{delivery_date_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        'body': bundle.inputData?.['body'],
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDeliveryDate', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryDateSample']
        }
    },
    updateDeliveryDateStatus: {
        key: 'updateDeliveryDateStatus',
        noun: 'delivery_date',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'delivery_date_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DeliveryDateStatusUpdate.fields(),
            ],
            outputFields: [
                ...DeliveryDate.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-dates/{delivery_date_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...DeliveryDateStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDeliveryDateStatus', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryDateSample']
        }
    },
}
