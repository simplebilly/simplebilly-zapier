const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Absence request status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'pending',
                    'approved',
                    'rejected',
                    'cancelled',
                ],
            }
        )
    }
