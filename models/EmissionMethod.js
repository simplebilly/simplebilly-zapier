const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Emission calculation method: \"activity\" | \"spend\" | \"supplier\". - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'activity',
                    'spend',
                    'supplier',
                ],
            }
        )
    }
