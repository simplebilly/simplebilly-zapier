const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const ConnectorType = require('../models/ConnectorType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}connection_id`,
                label: `[${labelPrefix}connection_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}connector_type`,
                ...ConnectorType.fields(`${keyPrefix}connector_type`, isInput),
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_active`,
                label: `[${labelPrefix}is_active]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_sync_at`,
                label: `[${labelPrefix}last_sync_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}platform`,
                label: `[${labelPrefix}platform]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}platform_user_id`,
                label: `[${labelPrefix}platform_user_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopes`,
                label: `[${labelPrefix}scopes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shop_domain`,
                label: `[${labelPrefix}shop_domain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shop_name`,
                label: `[${labelPrefix}shop_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sync_status`,
                label: `[${labelPrefix}sync_status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenant_id`,
                label: `[${labelPrefix}tenant_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${labelPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'config': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}config`)),
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'connector_type': bundle.inputData?.[`${keyPrefix}connector_type`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'last_sync_at': bundle.inputData?.[`${keyPrefix}last_sync_at`],
            'platform': bundle.inputData?.[`${keyPrefix}platform`],
            'platform_user_id': bundle.inputData?.[`${keyPrefix}platform_user_id`],
            'scopes': bundle.inputData?.[`${keyPrefix}scopes`],
            'shop_domain': bundle.inputData?.[`${keyPrefix}shop_domain`],
            'shop_name': bundle.inputData?.[`${keyPrefix}shop_name`],
            'sync_status': bundle.inputData?.[`${keyPrefix}sync_status`],
            'tenant_id': bundle.inputData?.[`${keyPrefix}tenant_id`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
