const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Channel the communication took place on. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'email',
                    'call',
                    'meeting',
                    'chat',
                    'note',
                ],
            }
        )
    }
