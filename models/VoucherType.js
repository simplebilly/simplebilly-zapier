const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Kind of booking voucher. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'invoice',
                ],
            }
        )
    }
