const utils = require('../utils/utils');
const ChangelogEntry = require('../models/ChangelogEntry');
const ConfigFieldInfo = require('../models/ConfigFieldInfo');
const PluginPricing = require('../models/PluginPricing');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}author`,
                label: `[${labelPrefix}author]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}changelog`,
                label: `[${labelPrefix}changelog]`,
                children: ChangelogEntry.fields(`${keyPrefix}changelog${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}config_field_names`,
                label: `[${labelPrefix}config_field_names]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}config_fields`,
                label: `[${labelPrefix}config_fields]`,
                children: ConfigFieldInfo.fields(`${keyPrefix}config_fields${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}display_name`,
                label: `[${labelPrefix}display_name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            ...PluginPricing.fields(`${keyPrefix}pricing`, isInput),
            {
                key: `${keyPrefix}supported_entities`,
                label: `[${labelPrefix}supported_entities]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}supports_export`,
                label: `[${labelPrefix}supports_export]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}supports_import`,
                label: `[${labelPrefix}supports_import]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}supports_oauth`,
                label: `[${labelPrefix}supports_oauth]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'author': bundle.inputData?.[`${keyPrefix}author`],
            'changelog': utils.childMapping(bundle.inputData?.[`${keyPrefix}changelog`], `${keyPrefix}changelog`, ChangelogEntry),
            'config_field_names': bundle.inputData?.[`${keyPrefix}config_field_names`],
            'config_fields': utils.childMapping(bundle.inputData?.[`${keyPrefix}config_fields`], `${keyPrefix}config_fields`, ConfigFieldInfo),
            'display_name': bundle.inputData?.[`${keyPrefix}display_name`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'pricing': utils.removeIfEmpty(PluginPricing.mapping(bundle, `${keyPrefix}pricing`)),
            'supported_entities': bundle.inputData?.[`${keyPrefix}supported_entities`],
            'supports_export': bundle.inputData?.[`${keyPrefix}supports_export`],
            'supports_import': bundle.inputData?.[`${keyPrefix}supports_import`],
            'supports_oauth': bundle.inputData?.[`${keyPrefix}supports_oauth`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
