const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Marketplace sync type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'orders',
                    'products',
                    'inventory',
                    'invoices',
                    'shipments',
                    'contacts',
                    'prices',
                    'config',
                    'branding',
                    'legal',
                ],
            }
        )
    }
