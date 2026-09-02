const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Stock transfer status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'completed',
                    'cancelled',
                ],
            }
        )
    }
