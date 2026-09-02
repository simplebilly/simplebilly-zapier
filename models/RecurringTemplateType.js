const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Recurring template type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'invoice',
                    'report',
                ],
            }
        )
    }
