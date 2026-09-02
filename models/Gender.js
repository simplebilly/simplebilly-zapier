const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Gender for pay-transparency reporting. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'male',
                    'female',
                    'diverse',
                ],
            }
        )
    }
