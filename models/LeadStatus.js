const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Lead status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'new',
                    'qualified',
                ],
            }
        )
    }
