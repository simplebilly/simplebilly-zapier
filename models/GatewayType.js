const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'stripe',
                    'paypal',
                    'klarna',
                    'sofort',
                    'bancontact',
                    'ideal',
                    'bank_transfer',
                    'mollie',
                    'bitpay',
                    'braintree',
                    'adyen',
                    'paddle',
                    'viva_wallet',
                    'reepay',
                    'sumup',
                    'test',
                ],
            }
        )
    }
