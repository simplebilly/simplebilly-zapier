const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Stock movement type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'goods_receipt',
                    'goods_receipt_reversal',
                    'transfer_in',
                    'transfer_out',
                    'return_restock',
                    'production_consumption',
                    'production_completion',
                    'inventory_adjustment',
                    'sale',
                    'other',
                ],
            }
        )
    }
