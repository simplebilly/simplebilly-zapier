const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Support ticket priority. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'normal',
                    'high',
                ],
            }
        )
    }
