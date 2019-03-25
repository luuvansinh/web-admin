import sprintf from 'i18next-sprintf-postprocessor'
import i18n from 'i18next'
import en from './en'
import vi from './vi'
import key from './key'

const language = localStorage.getItem(key.i18nLanguage) || 'vi'

i18n.use(sprintf).init({
  resources: {
    en,
    vi,
  },
  lng: language,
  fallbackLng: 'vi',

  ns: [
    key.translations,
    key.businesses,
    key.menu,
    key.users,
    key.account,
    key.inbox,
    key.inboxFlags,
    key.review,
    key.voucherCategory,
    key.voucherGroups,
    key.voucherBanner,
    key.voucher,
  ],
  defaultNS: key.translations,
  fallbackNS: [
    key.translations,
    key.businesses,
    key.menu,
    key.users,
    key.account,
    key.inbox,
    key.inboxFlags,
    key.review,
    key.voucherCategory,
    key.voucherGroups,
    key.voucherBanner,
    key.voucher,
  ],
  // debug: true,

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
