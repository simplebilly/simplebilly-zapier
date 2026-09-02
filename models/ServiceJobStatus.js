const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Service job dispatch status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'pending',
                    'assigned',
                    'en_route',
                    'in_progress',
                    'completed',
                    'cancelled',
                ],
            }
        )
    }
