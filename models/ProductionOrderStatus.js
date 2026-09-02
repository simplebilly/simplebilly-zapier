const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Production order status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'planned',
                    'in_production',
                    'completed',
                    'cancelled',
                ],
            }
        )
    }
