const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Activity status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'open',
                    'done',
                    'cancelled',
                ],
            }
        )
    }
