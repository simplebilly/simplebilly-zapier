const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Marketplace sync status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'pending',
                    'connected',
                    'success',
                    'error',
                ],
            }
        )
    }
