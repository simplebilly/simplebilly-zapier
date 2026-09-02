const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `BOM lifecycle status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'active',
                    'archived',
                ],
            }
        )
    }
