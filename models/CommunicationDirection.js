const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Direction of the communication relative to the business. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'inbound',
                    'outbound',
                ],
            }
        )
    }
