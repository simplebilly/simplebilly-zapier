const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Contact category: customer or supplier. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'customer',
                    'supplier',
                ],
            }
        )
    }
