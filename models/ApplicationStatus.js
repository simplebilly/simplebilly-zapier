const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Application status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'new',
                    'reviewing',
                    'interview',
                    'hired',
                    'rejected',
                ],
            }
        )
    }
