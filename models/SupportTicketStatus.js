const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Support ticket status. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'open',
                    'awaiting_reply',
                    'resolved',
                    'closed',
                ],
            }
        )
    }
