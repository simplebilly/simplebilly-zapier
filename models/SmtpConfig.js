const utils = require('../utils/utils');
const SmtpEncryption = require('../models/SmtpEncryption');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}encryption`,
                ...SmtpEncryption.fields(`${keyPrefix}encryption`, isInput),
            },
            {
                key: `${keyPrefix}from_address`,
                label: `[${labelPrefix}from_address]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}from_name`,
                label: `[${labelPrefix}from_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}host`,
                label: `[${labelPrefix}host]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}password`,
                label: `[${labelPrefix}password]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}port`,
                label: `[${labelPrefix}port]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}timeout_seconds`,
                label: `[${labelPrefix}timeout_seconds]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}username`,
                label: `[${labelPrefix}username]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'encryption': bundle.inputData?.[`${keyPrefix}encryption`],
            'from_address': bundle.inputData?.[`${keyPrefix}from_address`],
            'from_name': bundle.inputData?.[`${keyPrefix}from_name`],
            'host': bundle.inputData?.[`${keyPrefix}host`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'port': bundle.inputData?.[`${keyPrefix}port`],
            'timeout_seconds': bundle.inputData?.[`${keyPrefix}timeout_seconds`],
            'username': bundle.inputData?.[`${keyPrefix}username`],
        }
    },
}
