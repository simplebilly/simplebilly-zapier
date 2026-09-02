const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Job posting status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'published',
                    'closed',
                ],
            }
        )
    }
