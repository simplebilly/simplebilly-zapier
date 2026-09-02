const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Absence type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'vacation',
                    'sick',
                    'sabbatical',
                    'parental',
                    'other',
                ],
            }
        )
    }
