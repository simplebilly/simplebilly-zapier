const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'Invoice',
                    'CreditNote',
                    'AdvancePayment',
                    'FinalSettlement',
                    'SpecialBilling',
                    'DownPaymentInvoice',
                    'Proforma',
                    'Recurring',
                    'CancellationInvoice',
                ],
            }
        )
    }
