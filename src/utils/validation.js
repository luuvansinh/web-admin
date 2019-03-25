const LANGUAGES = ['en', 'vi']

/**
 * Check form item is valid data
 *
 * @param {Object} obj
 */
const checkLocaleFormItem = (obj) => {
  if (!obj) {
    return false
  }
  for (const language of LANGUAGES) {
    if (!obj[language]) {
      return false
    }
  }
  return true
}

export default {
  checkLocaleFormItem,
}
