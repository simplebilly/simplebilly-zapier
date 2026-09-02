const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `How a marketplace connector authenticates: static API key or OAuth2. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'apikey',
                    'oauth',
                ],
            }
        )
    }
