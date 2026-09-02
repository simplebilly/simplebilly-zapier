const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Coupon discount type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'percentage',
                    'fixed_amount',
                ],
            }
        )
    }
