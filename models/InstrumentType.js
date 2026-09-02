const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Silent-partnership instrument: \"typisch\" | \"atypisch\". - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'typisch',
                    'atypisch',
                ],
            }
        )
    }
