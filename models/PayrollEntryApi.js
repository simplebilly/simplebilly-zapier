const utils = require('../utils/utils');
const Employee = require('../models/Employee');
const PayrollRunStatus = require('../models/PayrollRunStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}av_employee`,
                label: `[${labelPrefix}av_employee]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}av_employer`,
                label: `[${labelPrefix}av_employer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}church_tax_amount`,
                label: `[${labelPrefix}church_tax_amount]`,
                required: true,
                type: 'string',
            },
            ...Employee.fields(`${keyPrefix}employee`, isInput),
            {
                key: `${keyPrefix}employee_id`,
                label: `[${labelPrefix}employee_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}entry_id`,
                label: `[${labelPrefix}entry_id]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}extra_payment_reason`,
                label: `[${labelPrefix}extra_payment_reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}extra_payments`,
                label: `[${labelPrefix}extra_payments]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}gross_salary`,
                label: `[${labelPrefix}gross_salary]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kv_employee`,
                label: `[${labelPrefix}kv_employee]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kv_employer`,
                label: `[${labelPrefix}kv_employer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lohnsteuer`,
                label: `[${labelPrefix}lohnsteuer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_salary`,
                label: `[${labelPrefix}net_salary]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pv_employee`,
                label: `[${labelPrefix}pv_employee]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}pv_employer`,
                label: `[${labelPrefix}pv_employer]`,
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
                key: `${keyPrefix}rv_employee`,
                label: `[${labelPrefix}rv_employee]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}rv_employer`,
                label: `[${labelPrefix}rv_employer]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sick_days`,
                label: `[${labelPrefix}sick_days]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}soli`,
                label: `[${labelPrefix}soli]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...PayrollRunStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}total_deductions`,
                label: `[${labelPrefix}total_deductions]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}total_employer_cost`,
                label: `[${labelPrefix}total_employer_cost]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vacation_days_used`,
                label: `[${labelPrefix}vacation_days_used]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'av_employee': bundle.inputData?.[`${keyPrefix}av_employee`],
            'av_employer': bundle.inputData?.[`${keyPrefix}av_employer`],
            'church_tax_amount': bundle.inputData?.[`${keyPrefix}church_tax_amount`],
            'employee': utils.removeIfEmpty(Employee.mapping(bundle, `${keyPrefix}employee`)),
            'employee_id': bundle.inputData?.[`${keyPrefix}employee_id`],
            'entry_id': bundle.inputData?.[`${keyPrefix}entry_id`],
            'extra_payment_reason': bundle.inputData?.[`${keyPrefix}extra_payment_reason`],
            'extra_payments': bundle.inputData?.[`${keyPrefix}extra_payments`],
            'gross_salary': bundle.inputData?.[`${keyPrefix}gross_salary`],
            'kv_employee': bundle.inputData?.[`${keyPrefix}kv_employee`],
            'kv_employer': bundle.inputData?.[`${keyPrefix}kv_employer`],
            'lohnsteuer': bundle.inputData?.[`${keyPrefix}lohnsteuer`],
            'net_salary': bundle.inputData?.[`${keyPrefix}net_salary`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'pv_employee': bundle.inputData?.[`${keyPrefix}pv_employee`],
            'pv_employer': bundle.inputData?.[`${keyPrefix}pv_employer`],
            'run_id': bundle.inputData?.[`${keyPrefix}run_id`],
            'rv_employee': bundle.inputData?.[`${keyPrefix}rv_employee`],
            'rv_employer': bundle.inputData?.[`${keyPrefix}rv_employer`],
            'sick_days': bundle.inputData?.[`${keyPrefix}sick_days`],
            'soli': bundle.inputData?.[`${keyPrefix}soli`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'total_deductions': bundle.inputData?.[`${keyPrefix}total_deductions`],
            'total_employer_cost': bundle.inputData?.[`${keyPrefix}total_employer_cost`],
            'vacation_days_used': bundle.inputData?.[`${keyPrefix}vacation_days_used`],
        }
    },
}
