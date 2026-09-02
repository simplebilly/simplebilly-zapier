const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Institutsart (KWG § 1). - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'kein',
                    'kreditinstitut',
                    'finanzdienstleistungsinstitut',
                    'finanzunternehmen',
                    'versicherung',
                ],
            }
        )
    }
