const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'Draft',
                    'Sent',
                    'PartiallyPaid',
                    'Paid',
                    'Overdue',
                    'Cancelled',
                    'Credited',
                    'Expired',
                    'Dunning',
                    'CollectDebt',
                ],
            }
        )
    }
