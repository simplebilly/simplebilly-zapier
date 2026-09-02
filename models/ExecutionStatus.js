const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Recurring template execution status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'ACTIVE',
                    'PAUSED',
                    'COMPLETED',
                ],
            }
        )
    }
