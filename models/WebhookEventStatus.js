const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Webhook event delivery status: accepted | delivered | failed. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'accepted',
                    'delivered',
                    'failed',
                    'received',
                ],
            }
        )
    }
