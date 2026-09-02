const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CompanyType = require('../models/CompanyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}companyType`,
                ...CompanyType.fields(`${keyPrefix}companyType`, isInput),
            },
            {
                key: `${keyPrefix}dpaAcceptedAt`,
                label: `[${labelPrefix}dpaAcceptedAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dpaAcceptedBy`,
                label: `[${labelPrefix}dpaAcceptedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dpaVersion`,
                label: `[${labelPrefix}dpaVersion]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}features`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'companyType': bundle.inputData?.[`${keyPrefix}companyType`],
            'dpaAcceptedAt': bundle.inputData?.[`${keyPrefix}dpaAcceptedAt`],
            'dpaAcceptedBy': bundle.inputData?.[`${keyPrefix}dpaAcceptedBy`],
            'dpaVersion': bundle.inputData?.[`${keyPrefix}dpaVersion`],
            'features': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}features`)),
        }
    },
}
