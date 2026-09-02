const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}backup_codes`,
                label: `[${labelPrefix}backup_codes]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}deleted_at`,
                label: `[${labelPrefix}deleted_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}email_verified`,
                label: `[${labelPrefix}email_verified]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
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
                key: `${keyPrefix}is_totp_enabled`,
                label: `[${labelPrefix}is_totp_enabled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}last_login`,
                label: `[${labelPrefix}last_login]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}oauth_id`,
                label: `[${labelPrefix}oauth_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}oauth_provider`,
                label: `[${labelPrefix}oauth_provider]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}password_changed_at`,
                label: `Set on password change; auth/refresh tokens issued before this timestamp are rejected by the auth middleware. - [${labelPrefix}password_changed_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}password_hash`,
                label: `[${labelPrefix}password_hash]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}picture`,
                label: `[${labelPrefix}picture]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privacy_accepted_at`,
                label: `When the user accepted the data privacy policy (GDPR consent record). - [${labelPrefix}privacy_accepted_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totp_secret`,
                label: `[${labelPrefix}totp_secret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${labelPrefix}updated_at]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'backup_codes': bundle.inputData?.[`${keyPrefix}backup_codes`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'deleted_at': bundle.inputData?.[`${keyPrefix}deleted_at`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'email_verified': bundle.inputData?.[`${keyPrefix}email_verified`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'is_active': bundle.inputData?.[`${keyPrefix}is_active`],
            'is_totp_enabled': bundle.inputData?.[`${keyPrefix}is_totp_enabled`],
            'last_login': bundle.inputData?.[`${keyPrefix}last_login`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'oauth_id': bundle.inputData?.[`${keyPrefix}oauth_id`],
            'oauth_provider': bundle.inputData?.[`${keyPrefix}oauth_provider`],
            'password_changed_at': bundle.inputData?.[`${keyPrefix}password_changed_at`],
            'password_hash': bundle.inputData?.[`${keyPrefix}password_hash`],
            'picture': bundle.inputData?.[`${keyPrefix}picture`],
            'privacy_accepted_at': bundle.inputData?.[`${keyPrefix}privacy_accepted_at`],
            'totp_secret': bundle.inputData?.[`${keyPrefix}totp_secret`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
