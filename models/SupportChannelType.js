const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Support channel type: email or chat. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'email',
                    'chat',
                ],
            }
        )
    }
