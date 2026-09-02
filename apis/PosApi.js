const samples = require('../samples/PosApi');
const AnyType = require('../models/AnyType');
const PosRegister = require('../models/PosRegister');
const PosRegisterCreate = require('../models/PosRegisterCreate');
const PosTable = require('../models/PosTable');
const PosTableCreate = require('../models/PosTableCreate');
const utils = require('../utils/utils');

module.exports = {
    posBilling: {
        key: 'posBilling',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/billing'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posBilling', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posCreateOrder: {
        key: 'posCreateOrder',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/orders'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posCreateOrder', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posCreateRegister: {
        key: 'posCreateRegister',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PosRegisterCreate.fields(),
            ],
            outputFields: [
                ...PosRegister.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/registers'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PosRegisterCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posCreateRegister', response.json);
                    return results;
                })
            },
            sample: samples['PosRegisterSample']
        }
    },
    posCreateTable: {
        key: 'posCreateTable',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...PosTableCreate.fields(),
            ],
            outputFields: [
                ...PosTable.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/tables'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...PosTableCreate.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posCreateTable', response.json);
                    return results;
                })
            },
            sample: samples['PosTableSample']
        }
    },
    posDisableRegister: {
        key: 'posDisableRegister',
        noun: 'pos',
        display: {
            label: '',
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
            ],
            outputFields: [
                ...PosRegister.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/registers/{id}/disable'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posDisableRegister', response.json);
                    return results;
                })
            },
            sample: samples['PosRegisterSample']
        }
    },
    posFreeTable: {
        key: 'posFreeTable',
        noun: 'pos',
        display: {
            label: '',
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
            ],
            outputFields: [
                ...PosTable.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/tables/{id}/free'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posFreeTable', response.json);
                    return results;
                })
            },
            sample: samples['PosTableSample']
        }
    },
    posKasseClosing: {
        key: 'posKasseClosing',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/kasse/closing'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posKasseClosing', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posKasseEntries: {
        key: 'posKasseEntries',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/kasse/entries'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posKasseEntries', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posKasseExport: {
        key: 'posKasseExport',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/kasse/export'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posKasseExport', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posKassePayInOut: {
        key: 'posKassePayInOut',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/kasse/pay-in-out'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posKassePayInOut', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posListOrders: {
        key: 'posListOrders',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'status',
                    label: 'Filter by order status',
                    type: 'string',
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/orders'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'status': bundle.inputData?.['status'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posListOrders', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posListProducts: {
        key: 'posListProducts',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'q',
                    label: 'Product search',
                    type: 'string',
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/products'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'q': bundle.inputData?.['q'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posListProducts', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posListRegisters: {
        key: 'posListRegisters',
        noun: 'pos',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/registers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posListRegisters', response.json);
                    return results;
                })
            },
            sample: samples['PosRegisterSample']
        }
    },
    posListTables: {
        key: 'posListTables',
        noun: 'pos',
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
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/tables'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posListTables', response.json);
                    return results;
                })
            },
            sample: samples['PosTableSample']
        }
    },
    posOrderPrint: {
        key: 'posOrderPrint',
        noun: 'pos',
        display: {
            label: '',
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
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/orders/{order_number}/print'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posOrderPrint', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posOrderReceipt: {
        key: 'posOrderReceipt',
        noun: 'pos',
        display: {
            label: '',
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
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/orders/{order_number}/receipt'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posOrderReceipt', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posPayOrder: {
        key: 'posPayOrder',
        noun: 'pos',
        display: {
            label: '',
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
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/orders/{order_number}/pay'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posPayOrder', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
    posSumupCheckout: {
        key: 'posSumupCheckout',
        noun: 'pos',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'body',
                    label: '',
                    type: 'AnyType',
                    required: true,
                },
            ],
            outputFields: [
                ...AnyType.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/pos/sumup/checkout'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'posSumupCheckout', response.json);
                    return results;
                })
            },
            sample: samples['AnyTypeSample']
        }
    },
}
