const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Emission target scope: \"total\" | \"1\" | \"2\" | \"3\". - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'total',
                    '1',
                    '2',
                    '3',
                ],
            }
        )
    }
