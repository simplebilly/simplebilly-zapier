const samples = require('../samples/DeliveryAppointmentApi');
const AnyType = require('../models/AnyType');
const AppointmentStatusUpdate = require('../models/AppointmentStatusUpdate');
const DeliveryAppointment = require('../models/DeliveryAppointment');
const DeliveryAppointmentCreate = require('../models/DeliveryAppointmentCreate');
const PluginError = require('../models/PluginError');
const PublicDeliveryAppointmentRequest = require('../models/PublicDeliveryAppointmentRequest');
const PublicDeliveryAppointmentResponse = require('../models/PublicDeliveryAppointmentResponse');
const PublicDeliveryAppointmentStatusResponse = require('../models/PublicDeliveryAppointmentStatusResponse');
const utils = require('../utils/utils');

module.exports = {
    createDeliveryAppointment: {
        key: 'createDeliveryAppointment',
        noun: 'delivery_appointment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...DeliveryAppointmentCreate.fields(),
            ],
            outputFields: [
                ...DeliveryAppointment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...DeliveryAppointmentCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createDeliveryAppointment', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryAppointmentSample']
        }
    },
    deleteDeliveryAppointment: {
        key: 'deleteDeliveryAppointment',
        noun: 'delivery_appointment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appointment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments/{appointment_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDeliveryAppointment', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getDeliveryAppointment: {
        key: 'getDeliveryAppointment',
        noun: 'delivery_appointment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appointment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DeliveryAppointment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments/{appointment_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDeliveryAppointment', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryAppointmentSample']
        }
    },
    getPublicDeliveryAppointmentStatus: {
        key: 'getPublicDeliveryAppointmentStatus',
        noun: 'delivery_appointment',
        display: {
            label: 'Supplier/carrier checks appointment status (public, no auth). The appointment is only revealed when email AND token match.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appointmentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'email',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'token',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PublicDeliveryAppointmentStatusResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/delivery-appointments/status'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'appointmentId': bundle.inputData?.['appointmentId'],
                        'email': bundle.inputData?.['email'],
                        'token': bundle.inputData?.['token'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPublicDeliveryAppointmentStatus', response.json);
                    return results;
                })
            },
            sample: samples['PublicDeliveryAppointmentStatusResponseSample']
        }
    },
    listDeliveryAppointments: {
        key: 'listDeliveryAppointments',
        noun: 'delivery_appointment',
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
                    key: 'page_size',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'status',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                },
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'status': bundle.inputData?.['status'],
                        'warehouse_id': bundle.inputData?.['warehouse_id'],
                        'from': bundle.inputData?.['from'],
                        'to': bundle.inputData?.['to'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listDeliveryAppointments', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryAppointmentSample']
        }
    },
    requestPublicDeliveryAppointment: {
        key: 'requestPublicDeliveryAppointment',
        noun: 'delivery_appointment',
        display: {
            label: 'Supplier/carrier requests an inbound delivery slot (public, no auth). The tenant is derived from the warehouse found by &#x60;code&#x60; — never from the request.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PublicDeliveryAppointmentRequest.fields(),
            ],
            outputFields: [
                ...PublicDeliveryAppointmentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/delivery-appointments/request'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PublicDeliveryAppointmentRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'requestPublicDeliveryAppointment', response.json);
                    return results;
                })
            },
            sample: samples['PublicDeliveryAppointmentResponseSample']
        }
    },
    updateDeliveryAppointment: {
        key: 'updateDeliveryAppointment',
        noun: 'delivery_appointment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appointment_id',
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
                ...DeliveryAppointment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments/{appointment_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDeliveryAppointment', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryAppointmentSample']
        }
    },
    updateDeliveryAppointmentStatus: {
        key: 'updateDeliveryAppointmentStatus',
        noun: 'delivery_appointment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appointment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AppointmentStatusUpdate.fields(),
            ],
            outputFields: [
                ...DeliveryAppointment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/delivery-appointments/{appointment_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...AppointmentStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDeliveryAppointmentStatus', response.json);
                    return results;
                })
            },
            sample: samples['DeliveryAppointmentSample']
        }
    },
}
