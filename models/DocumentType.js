const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Document kind of the invoice record. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'invoice',
                    'creditnote',
                    'advancepayment',
                    'downpaymentinvoice',
                    'deliverynote',
                    'orderconfirmation',
                    'quotation',
                    'proformainvoice',
                ],
            }
        )
    }
