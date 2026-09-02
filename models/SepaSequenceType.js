const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `SEPA mandate sequence type (ISO 20022 mandate codes). - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'FRST',
                    'RCUR',
                    'FNAL',
                    'OOFF',
                ],
            }
        )
    }
