const samples = require('../samples/GoodsReceiptApi');
const GoodsReceipt = require('../models/GoodsReceipt');
const PluginError = require('../models/PluginError');
const utils = require('../utils/utils');

module.exports = {
    createGoodsReceipt: {
        key: 'createGoodsReceipt',
        noun: 'goods_receipt',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...GoodsReceipt.fields(),
            ],
            outputFields: [
                ...GoodsReceipt.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/goods-receipts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GoodsReceipt.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createGoodsReceipt', response.json);
                    return results;
                })
            },
            sample: samples['GoodsReceiptSample']
        }
    },
    deleteGoodsReceipt: {
        key: 'deleteGoodsReceipt',
        noun: 'goods_receipt',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'goods_receipt_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/goods-receipts/{goods_receipt_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteGoodsReceipt', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getGoodsReceipt: {
        key: 'getGoodsReceipt',
        noun: 'goods_receipt',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'goods_receipt_id',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...GoodsReceipt.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/goods-receipts/{goods_receipt_id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGoodsReceipt', response.json);
                    return results;
                })
            },
            sample: samples['GoodsReceiptSample']
        }
    },
    listGoodsReceipts: {
        key: 'listGoodsReceipts',
        noun: 'goods_receipt',
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
                    key: 'purchase_order_id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'supplier_name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'warehouse_id',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/goods-receipts/'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                        'page_size': bundle.inputData?.['page_size'],
                        'purchase_order_id': bundle.inputData?.['purchase_order_id'],
                        'supplier_name': bundle.inputData?.['supplier_name'],
                        'warehouse_id': bundle.inputData?.['warehouse_id'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listGoodsReceipts', response.json);
                    return results;
                })
            },
            sample: samples['GoodsReceiptSample']
        }
    },
}
