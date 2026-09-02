const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Delivery date status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'promised',
                    'confirmed',
                    'rescheduled',
                    'fulfilled',
                    'late',
                    'cancelled',
                ],
            }
        )
    }
