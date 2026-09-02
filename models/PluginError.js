const utils = require('../utils/utils');
const PluginError_oneOf = require('../models/PluginError_oneOf');
const PluginError_oneOf_1 = require('../models/PluginError_oneOf_1');
const PluginError_oneOf_2 = require('../models/PluginError_oneOf_2');
const PluginError_oneOf_3 = require('../models/PluginError_oneOf_3');
const PluginError_oneOf_4 = require('../models/PluginError_oneOf_4');
const PluginError_oneOf_5 = require('../models/PluginError_oneOf_5');
const PluginError_oneOf_6 = require('../models/PluginError_oneOf_6');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}BadRequest`,
                label: `[${labelPrefix}BadRequest]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}NotFound`,
                label: `[${labelPrefix}NotFound]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}Unauthorized`,
                label: `[${labelPrefix}Unauthorized]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}InternalError`,
                label: `[${labelPrefix}InternalError]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}DatabaseError`,
                label: `[${labelPrefix}DatabaseError]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}ValidationError`,
                label: `[${labelPrefix}ValidationError]`,
                required: true,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}NotImplemented`,
                label: `[${labelPrefix}NotImplemented]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'BadRequest': bundle.inputData?.[`${keyPrefix}BadRequest`],
            'NotFound': bundle.inputData?.[`${keyPrefix}NotFound`],
            'Unauthorized': bundle.inputData?.[`${keyPrefix}Unauthorized`],
            'InternalError': bundle.inputData?.[`${keyPrefix}InternalError`],
            'DatabaseError': bundle.inputData?.[`${keyPrefix}DatabaseError`],
            'ValidationError': bundle.inputData?.[`${keyPrefix}ValidationError`],
            'NotImplemented': bundle.inputData?.[`${keyPrefix}NotImplemented`],
        }
    },
}
