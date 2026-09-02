const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `[${key.replaceAll('__', '.')}]`,
                choices: [
                    'none',
                    'due',
                    'level1',
                    'level2',
                    'level3',
                ],
            }
        )
    }
