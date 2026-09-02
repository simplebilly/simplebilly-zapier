const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Type of the sales voucher that preceded this document. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'order_confirmation',
                    'quotation',
                    'proforma_invoice',
                ],
            }
        )
    }
