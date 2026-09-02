const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Legal form / company type of the tenant. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'gmbh',
                    'ug',
                    'einzelhaendler',
                    'freiberufler',
                    'ag',
                    'gbr',
                ],
            }
        )
    }
