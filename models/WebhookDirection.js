const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Webhook event direction: inbound | outbound. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'inbound',
                    'outbound',
                ],
            }
        )
    }
