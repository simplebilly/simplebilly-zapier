const utils = require('../utils/utils');
const BetriebsstaettenDetail = require('../models/BetriebsstaettenDetail');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}beitragsfreie_kfz`,
                label: `[${labelPrefix}beitragsfreie_kfz]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}beitragspflichtige_kfz`,
                label: `[${labelPrefix}beitragspflichtige_kfz]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}betriebsstaetten`,
                label: `[${labelPrefix}betriebsstaetten]`,
                children: BetriebsstaettenDetail.fields(`${keyPrefix}betriebsstaetten${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}hinweis`,
                label: `[${labelPrefix}hinweis]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}hotelzimmer_beitrag`,
                label: `[${labelPrefix}hotelzimmer_beitrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jaehrlicher_beitrag`,
                label: `[${labelPrefix}jaehrlicher_beitrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}jahr`,
                label: `[${labelPrefix}jahr]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}kfz_beitrag`,
                label: `[${labelPrefix}kfz_beitrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}monatlicher_beitrag`,
                label: `[${labelPrefix}monatlicher_beitrag]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vierteljaehrlicher_beitrag`,
                label: `[${labelPrefix}vierteljaehrlicher_beitrag]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'beitragsfreie_kfz': bundle.inputData?.[`${keyPrefix}beitragsfreie_kfz`],
            'beitragspflichtige_kfz': bundle.inputData?.[`${keyPrefix}beitragspflichtige_kfz`],
            'betriebsstaetten': utils.childMapping(bundle.inputData?.[`${keyPrefix}betriebsstaetten`], `${keyPrefix}betriebsstaetten`, BetriebsstaettenDetail),
            'hinweis': bundle.inputData?.[`${keyPrefix}hinweis`],
            'hotelzimmer_beitrag': bundle.inputData?.[`${keyPrefix}hotelzimmer_beitrag`],
            'jaehrlicher_beitrag': bundle.inputData?.[`${keyPrefix}jaehrlicher_beitrag`],
            'jahr': bundle.inputData?.[`${keyPrefix}jahr`],
            'kfz_beitrag': bundle.inputData?.[`${keyPrefix}kfz_beitrag`],
            'monatlicher_beitrag': bundle.inputData?.[`${keyPrefix}monatlicher_beitrag`],
            'vierteljaehrlicher_beitrag': bundle.inputData?.[`${keyPrefix}vierteljaehrlicher_beitrag`],
        }
    },
}
