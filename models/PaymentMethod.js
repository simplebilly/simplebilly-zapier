const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'bank_transfer',
                    'sepa_direct_debit',
                    'cash',
                    'credit_card',
                    'paypal',
                    'sumup',
                    'viva_wallet',
                    'reepay',
                    'none',
                ],
            }
        )
    }
