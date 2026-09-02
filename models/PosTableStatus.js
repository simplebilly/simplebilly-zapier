const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `POS table status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'free',
                    'occupied',
                ],
            }
        )
    }
