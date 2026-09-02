const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `POS register status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'active',
                    'disabled',
                ],
            }
        )
    }
