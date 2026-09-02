const utils = require('../utils/utils');
const CompanyType = require('../models/CompanyType');
const PartialFeatureSettings = require('../models/PartialFeatureSettings');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}companyType`,
                ...CompanyType.fields(`${keyPrefix}companyType`, isInput),
            },
            ...PartialFeatureSettings.fields(`${keyPrefix}features`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'companyType': bundle.inputData?.[`${keyPrefix}companyType`],
            'features': utils.removeIfEmpty(PartialFeatureSettings.mapping(bundle, `${keyPrefix}features`)),
        }
    },
}
