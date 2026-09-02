const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Inventory count status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'draft',
                    'counting',
                    'reviewed',
                    'posted',
                ],
            }
        )
    }
