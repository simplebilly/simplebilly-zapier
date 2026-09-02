const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `RFQ status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'sent',
                    'offer_received',
                    'rejected',
                    'converted',
                ],
            }
        )
    }
