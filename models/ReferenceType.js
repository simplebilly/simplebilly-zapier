const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Stock movement reference type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'goods_receipt',
                    'production_order',
                    'transfer_in',
                    'stock_transfer',
                    'return_order',
                    'inventory_count',
                ],
            }
        )
    }
