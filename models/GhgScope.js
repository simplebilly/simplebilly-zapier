const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `GHG scope: \"1\" | \"2\" | \"3\". - [${key.replaceAll('__', '.')}]`,
                choices: [
                    '1',
                    '2',
                    '3',
                ],
            }
        )
    }
