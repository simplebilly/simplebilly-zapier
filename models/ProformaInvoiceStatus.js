const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Lifecycle status of a proforma invoice. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'sent',
                    'converted',
                ],
            }
        )
    }
