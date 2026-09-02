const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Marketplace sync log status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'running',
                    'success',
                    'error',
                ],
            }
        )
    }
