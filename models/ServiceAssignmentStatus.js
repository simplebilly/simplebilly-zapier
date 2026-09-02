const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Service assignment status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'planned',
                    'confirmed',
                    'en_route',
                    'in_progress',
                    'completed',
                    'cancelled',
                ],
            }
        )
    }
