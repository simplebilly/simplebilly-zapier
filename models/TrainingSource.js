const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Source of the training content. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'builtin',
                    'plugin',
                ],
            }
        )
    }
