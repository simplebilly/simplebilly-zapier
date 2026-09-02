const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Lifecycle status of a voucher. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'open',
                    'paid',
                    'invoiced',
                ],
            }
        )
    }
