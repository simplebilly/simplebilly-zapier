const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Employment type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'fulltime',
                    'parttime',
                    'contract',
                    'internship',
                    'temporary',
                ],
            }
        )
    }
