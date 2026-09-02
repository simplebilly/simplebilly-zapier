const samples = require('../samples/ShipmentApi');
const CreateShipmentRequest = require('../models/CreateShipmentRequest');
const PluginError = require('../models/PluginError');
const Shipment = require('../models/Shipment');
const ShipmentStatusUpdate = require('../models/ShipmentStatusUpdate');
const TrackOrderRequest = require('../models/TrackOrderRequest');
const TrackOrderResponse = require('../models/TrackOrderResponse');
const TrackingInfo = require('../models/TrackingInfo');
const utils = require('../utils/utils');

module.exports = {
    createShipment: {
        key: 'createShipment',
        noun: 'shipment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...Shipment.fields(),
            ],
            outputFields: [
                ...Shipment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...Shipment.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createShipment', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentSample']
        }
    },
    createShipmentFromOrder: {
        key: 'createShipmentFromOrder',
        noun: 'shipment',
        display: {
            label: 'Create a real shipment for an order: calls the configured carrier&#39;s label API, stores the returned tracking/label on a new shipment row, and marks the order as shipped.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'order_number',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...CreateShipmentRequest.fields(),
            ],
            outputFields: [
                ...Shipment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/orders/{order_number}/shipments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateShipmentRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createShipmentFromOrder', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentSample']
        }
    },
    deleteShipment: {
        key: 'deleteShipment',
        noun: 'shipment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'shipment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments/{shipment_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteShipment', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getShipment: {
        key: 'getShipment',
        noun: 'shipment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'shipment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Shipment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments/{shipment_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getShipment', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentSample']
        }
    },
    listShipments: {
        key: 'listShipments',
        noun: 'shipment',
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
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'include_deleted',
                    label: 'Soft-delete entities: set true to include rows with &#x60;deleted_at&#x60; set.',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'search': bundle.inputData?.['search'],
                        'include_deleted': bundle.inputData?.['include_deleted'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listShipments', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentSample']
        }
    },
    trackOrderPublic: {
        key: 'trackOrderPublic',
        noun: 'shipment',
        display: {
            label: 'Customer-facing tracking lookup: order number + email → shipment status and live carrier events. No auth (public storefront API).',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TrackOrderRequest.fields(),
            ],
            outputFields: [
                ...TrackOrderResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/public/track'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...TrackOrderRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'trackOrderPublic', response.json);
                    return results;
                })
            },
            sample: samples['TrackOrderResponseSample']
        }
    },
    trackShipmentApi: {
        key: 'trackShipmentApi',
        noun: 'shipment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'shipment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...TrackingInfo.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments/{shipment_id}/tracking'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'trackShipmentApi', response.json);
                    return results;
                })
            },
            sample: samples['TrackingInfoSample']
        }
    },
    updateShipmentStatus: {
        key: 'updateShipmentStatus',
        noun: 'shipment',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'shipment_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ShipmentStatusUpdate.fields(),
            ],
            outputFields: [
                ...Shipment.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/shipments/{shipment_id}/status'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ShipmentStatusUpdate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateShipmentStatus', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentSample']
        }
    },
}
