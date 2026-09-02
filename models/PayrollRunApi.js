const utils = require('../utils/utils');
const PayrollEntryApi = require('../models/PayrollEntryApi');
const PayrollRunStatus = require('../models/PayrollRunStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}approved_at`,
                label: `[${labelPrefix}approved_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approved_by`,
                label: `[${labelPrefix}approved_by]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}entries`,
                label: `[${labelPrefix}entries]`,
                children: PayrollEntryApi.fields(`${keyPrefix}entries${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}month`,
                label: `[${labelPrefix}month]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}payment_date`,
                label: `[${labelPrefix}payment_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}period_label`,
                label: `[${labelPrefix}period_label]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}run_id`,
                label: `[${labelPrefix}run_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...PayrollRunStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}tenant_id`,
                label: `[${labelPrefix}tenant_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_employee_count`,
                label: `[${labelPrefix}total_employee_count]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total_employer_cost`,
                label: `[${labelPrefix}total_employer_cost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_gross`,
                label: `[${labelPrefix}total_gross]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_net`,
                label: `[${labelPrefix}total_net]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_social_security`,
                label: `[${labelPrefix}total_social_security]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_taxes`,
                label: `[${labelPrefix}total_taxes]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${labelPrefix}updated_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'approved_at': bundle.inputData?.[`${keyPrefix}approved_at`],
            'approved_by': bundle.inputData?.[`${keyPrefix}approved_by`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'entries': utils.childMapping(bundle.inputData?.[`${keyPrefix}entries`], `${keyPrefix}entries`, PayrollEntryApi),
            'month': bundle.inputData?.[`${keyPrefix}month`],
            'payment_date': bundle.inputData?.[`${keyPrefix}payment_date`],
            'period_label': bundle.inputData?.[`${keyPrefix}period_label`],
            'run_id': bundle.inputData?.[`${keyPrefix}run_id`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'tenant_id': bundle.inputData?.[`${keyPrefix}tenant_id`],
            'total_employee_count': bundle.inputData?.[`${keyPrefix}total_employee_count`],
            'total_employer_cost': bundle.inputData?.[`${keyPrefix}total_employer_cost`],
            'total_gross': bundle.inputData?.[`${keyPrefix}total_gross`],
            'total_net': bundle.inputData?.[`${keyPrefix}total_net`],
            'total_social_security': bundle.inputData?.[`${keyPrefix}total_social_security`],
            'total_taxes': bundle.inputData?.[`${keyPrefix}total_taxes`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
        }
    },
}
