const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Posting category type: income or expense. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'income',
                    'expense',
                ],
            }
        )
    }
