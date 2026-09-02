const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment state of an invoice. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'unpaid',
                    'paid',
                ],
            }
        )
    }
