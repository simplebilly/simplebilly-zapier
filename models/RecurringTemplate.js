const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}end_date`,
                label: `[${labelPrefix}end_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}execution_interval`,
                label: `[${labelPrefix}execution_interval]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}execution_status`,
                label: `[${labelPrefix}execution_status]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}finalize`,
                label: `[${labelPrefix}finalize]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}last_executed_at`,
                label: `[${labelPrefix}last_executed_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}next_execution_at`,
                label: `[${labelPrefix}next_execution_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}start_date`,
                label: `[${labelPrefix}start_date]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}template_id`,
                label: `[${labelPrefix}template_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}template_type`,
                label: `[${labelPrefix}template_type]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${labelPrefix}updated_at]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}voucher_data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'deleted_at': bundle.inputData?.[`${keyPrefix}deleted_at`],
            'end_date': bundle.inputData?.[`${keyPrefix}end_date`],
            'execution_interval': bundle.inputData?.[`${keyPrefix}execution_interval`],
            'execution_status': bundle.inputData?.[`${keyPrefix}execution_status`],
            'finalize': bundle.inputData?.[`${keyPrefix}finalize`],
            'last_executed_at': bundle.inputData?.[`${keyPrefix}last_executed_at`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'next_execution_at': bundle.inputData?.[`${keyPrefix}next_execution_at`],
            'start_date': bundle.inputData?.[`${keyPrefix}start_date`],
            'template_id': bundle.inputData?.[`${keyPrefix}template_id`],
            'template_type': bundle.inputData?.[`${keyPrefix}template_type`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
            'voucher_data': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}voucher_data`)),
        }
    },
}
