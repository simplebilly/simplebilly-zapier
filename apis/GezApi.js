const samples = require('../samples/GezApi');
const GezReport = require('../models/GezReport');
const utils = require('../utils/utils');

module.exports = {
    gezApi: {
        key: 'gezApi',
        noun: 'gez',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'jahr',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'betriebsstaetten',
                    label: 'Liste der Betriebsstätten als JSON, z.B. &#x60;[{\&quot;name\&quot;:\&quot;Filiale 1\&quot;,\&quot;beschaefigte\&quot;:12}]&#x60;.',
                    type: 'string',
                },
                {
                    key: 'kfz',
                    label: 'Gesamtzahl der betrieblich genutzten Kfz (falls keine Betriebsstätten angegeben sind).',
                    type: 'number',
                },
                {
                    key: 'hotelzimmer',
                    label: 'Gesamtzahl der Hotel-/Gästezimmer und Ferienwohnungen.',
                    type: 'number',
                },
                {
                    key: 'beschaefigte',
                    label: 'Gesamtzahl der Beschäftigten (verwendet nur, wenn &#x60;betriebsstaetten&#x60; fehlt; dann wird eine einzelne Betriebsstätte angenommen).',
                    type: 'number',
                },
            ],
            outputFields: [
                ...GezReport.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://demo.simplebilly.com/api/v1/bookkeeping/gez'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'jahr': bundle.inputData?.['jahr'],
                        'betriebsstaetten': bundle.inputData?.['betriebsstaetten'],
                        'kfz': bundle.inputData?.['kfz'],
                        'hotelzimmer': bundle.inputData?.['hotelzimmer'],
                        'beschaefigte': bundle.inputData?.['beschaefigte'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'gezApi', response.json);
                    return results;
                })
            },
            sample: samples['GezReportSample']
        }
    },
}
