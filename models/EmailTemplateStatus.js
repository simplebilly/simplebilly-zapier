const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Email template status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'active',
                    'inactive',
                ],
            }
        )
    }
