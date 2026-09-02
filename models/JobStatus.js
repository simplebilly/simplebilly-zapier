const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Job queue status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'pending',
                    'running',
                    'done',
                    'failed',
                ],
            }
        )
    }
