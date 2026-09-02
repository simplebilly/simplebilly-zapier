const utils = require('../utils/utils');
const ConfigFieldKind_oneOf = require('../models/ConfigFieldKind_oneOf');
const ConfigFieldKind_oneOf_1 = require('../models/ConfigFieldKind_oneOf_1');
const ConfigFieldKind_oneOf_2 = require('../models/ConfigFieldKind_oneOf_2');
const ConfigFieldKind_oneOf_3 = require('../models/ConfigFieldKind_oneOf_3');
const ConfigFieldKind_oneOf_4 = require('../models/ConfigFieldKind_oneOf_4');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
                choices: [
                    'text',
                    'secret',
                    'url',
                    'select',
                    'bool',
                ],
            },
            {
                key: `${keyPrefix}options`,
                label: `[${labelPrefix}options]`,
                required: true,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'options': bundle.inputData?.[`${keyPrefix}options`],
        }
    },
}
