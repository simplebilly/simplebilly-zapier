const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Activity type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'call',
                    'email',
                    'meeting',
                    'task',
                    'note',
                ],
            }
        )
    }
