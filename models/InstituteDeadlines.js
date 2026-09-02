const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}abschlusspruefungMonths`,
                label: `HGB § 340k/§ 341k: Abschlussprüfung (5 Monate). - [${labelPrefix}abschlusspruefungMonths]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}jahresabschlussBafinMonths`,
                label: `KWG § 26: Jahresabschluss an die BaFin (3 Monate, nur KWG-Institute). - [${labelPrefix}jahresabschlussBafinMonths]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}offenlegungMonths`,
                label: `HGB § 325 Abs. 4: Offenlegung (4 kapitalmarktorientiert / 12 sonst). - [${labelPrefix}offenlegungMonths]`,
                required: true,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'abschlusspruefungMonths': bundle.inputData?.[`${keyPrefix}abschlusspruefungMonths`],
            'jahresabschlussBafinMonths': bundle.inputData?.[`${keyPrefix}jahresabschlussBafinMonths`],
            'offenlegungMonths': bundle.inputData?.[`${keyPrefix}offenlegungMonths`],
        }
    },
}
