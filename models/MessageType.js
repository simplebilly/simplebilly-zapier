const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Body format of a ticket message. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'text',
                    'html',
                ],
            }
        )
    }
