const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Legal document type (matches `DOC_TYPES` in legal_defaults.rs). - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'imprint',
                    'privacy',
                    'terms',
                    'withdrawal',
                    'refund',
                    'shipping',
                    'gpsr',
                    'cookie_notice',
                ],
            }
        )
    }
