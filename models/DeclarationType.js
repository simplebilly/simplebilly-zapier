const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Art der Erklärung: \"dcgk\" (Entsprechenserklärung § 161 AktG) oder \"unternehmensfuehrung\" (Erklärung zur Unternehmensführung § 289f HGB). - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'dcgk',
                    'unternehmensfuehrung',
                ],
            }
        )
    }
