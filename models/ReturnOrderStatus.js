const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Return order status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'requested',
                    'received',
                    'inspected',
                    'restocked',
                    'closed',
                ],
            }
        )
    }
