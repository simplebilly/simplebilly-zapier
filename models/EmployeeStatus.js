const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Employment status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'active',
                    'inactive',
                    'terminated',
                ],
            }
        )
    }
