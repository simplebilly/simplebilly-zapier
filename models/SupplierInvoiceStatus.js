const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Supplier invoice status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'matched',
                    'has_variances',
                    'posted',
                    'cancelled',
                ],
            }
        )
    }
