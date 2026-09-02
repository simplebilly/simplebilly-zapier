const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Purchase order status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'ordered',
                    'partially_received',
                    'received',
                    'cancelled',
                ],
            }
        )
    }
