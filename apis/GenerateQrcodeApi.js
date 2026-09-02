const samples = require('../samples/GenerateQrcodeApi');
const QRCodeResponse = require('../models/QRCodeResponse');
const utils = require('../utils/utils');

module.exports = {
    generateQrcodeApi: {
        key: 'generateQrcodeApi',
        noun: 'generate_qrcode',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'iban',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'holder_name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'bic',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'amount',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'reference',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'purpose',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...QRCodeResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/invoices/{id}/qrcode'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'iban': bundle.inputData?.['iban'],
                        'holder_name': bundle.inputData?.['holder_name'],
                        'bic': bundle.inputData?.['bic'],
                        'amount': bundle.inputData?.['amount'],
                        'reference': bundle.inputData?.['reference'],
                        'purpose': bundle.inputData?.['purpose'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'generateQrcodeApi', response.json);
                    return results;
                })
            },
            sample: samples['QRCodeResponseSample']
        }
    },
}
