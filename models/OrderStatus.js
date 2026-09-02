const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'pending',
                    'ordered',
                    'confirmed',
                    'processing',
                    'paid',
                    'shipped',
                    'completed',
                    'closed',
                    'cancelled',
                    'refunded',
                    'failed',
                ],
            }
        )
    }
