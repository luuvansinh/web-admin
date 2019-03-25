import React from 'react'
import { Select } from 'antd'
import { translate } from 'react-i18next'
import { AppConst } from '../../../../configs'
import { key } from '../../../../configs/locale'

const { Option } = Select

const LanguageSelector = ({ i18n }) => {
  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem(key.i18nLanguage, language)
  }
  return (
    <div style={{ float: 'right', marginRight: '24px' }}>
      <Select defaultValue={i18n.language} size="small" onChange={onChangeLanguage}>
        {
          AppConst.locale.list.map(item => (
            <Option key={item.language} value={item.language}>{item.description}</Option>
          ))
        }
      </Select>
    </div>
  )
}

export default translate(key.translations)(LanguageSelector)
