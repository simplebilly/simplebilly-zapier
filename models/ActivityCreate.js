const utils = require('../utils/utils');
const ActivityStatus = require('../models/ActivityStatus');
const ActivityType = require('../models/ActivityType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}activityType`,
                ...ActivityType.fields(`${keyPrefix}activityType`, isInput),
            },
            {
                key: `${keyPrefix}assignedTo`,
                label: `User responsible (`employee.employee_id`). - [${labelPrefix}assignedTo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `Contact this activity belongs to (`contact.contact_id`). References the contact entity. - [${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dueDate`,
                label: `Follow-up / Wiedervorlage date. Open activities with a due date in the past are overdue. - [${labelPrefix}dueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reminderDate`,
                label: `When to remind about the follow-up. - [${labelPrefix}reminderDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...ActivityStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}subject`,
                label: `Short subject line. - [${labelPrefix}subject]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'activityType': bundle.inputData?.[`${keyPrefix}activityType`],
            'assignedTo': bundle.inputData?.[`${keyPrefix}assignedTo`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'reminderDate': bundle.inputData?.[`${keyPrefix}reminderDate`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
        }
    },
}
