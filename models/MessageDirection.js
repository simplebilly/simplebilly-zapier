const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Message direction relative to the business. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'inbound',
                    'outbound',
                    'internal',
                ],
            }
        )
    }
