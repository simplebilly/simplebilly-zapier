const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Delivery appointment status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'requested',
                    'confirmed',
                    'arrived',
                    'cancelled',
                    'completed',
                ],
            }
        )
    }
