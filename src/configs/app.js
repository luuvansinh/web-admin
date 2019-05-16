const LocalStoragePrefix = (process.env.NODE_ENV === 'production') ? 'admin-ecommerce-' : 'admin-dev-ecommerce-'

export default {
  name: 'Shop Admin',

  // Screen size
  screens: {
    'xs-max': 480,
    'sm-min': 481,
    'sm-max': 767,
    'md-min': 768,
    'md-max': 991,
    'lg-min': 992,
    'lg-max': 1199,
    'xl-min': 1200,
  },

  // Local storage
  localStorage: {
    authKey: `${LocalStoragePrefix}token`,
    roleKey: `${LocalStoragePrefix}role`,
    pAuthKey: 'user-token',
  },

  // Notification level
  notification: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
  },

  // Regex
  // Regex
  regex: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    objectId: /^[0-9a-fA-F]{24}$/,
    positiveInteger: /^[+]?\d*$/,
    phone: /^\+?1?(\d{10,12}$)/,
  },

  // Format
  format: {
    date: 'DD/MM/YYYY, HH:mm',
    dateWithNoHour: 'DD/MM/YYYY',
    dateWithDayMonthOnly: 'DD/MM',
    dateWithHour: 'H',
    dateWithMinute: 'm',
    month: 'MM/YYYY',
    inputNumberFormatter: /\B(?=(\d{3})+(?!\d))/g,
    inputNumberParser: /\$\s?|(,*)/g,
  },

  // Allow image
  files: {
    imageTypesAllow: ['.png', '.jpg', '.jpeg'],
    excelTypes: ['.xlsx', '.xls'],
    word: '.doc',
    pdf: '.pdf',
    zip: '.zip',
    rar: '.rar',
  },

  // App colors
  colors: {
    app: '#2d6097',

    // Common
    white: '#fff',
    black: '#000',
  },

  // Locales
  locale: {
    default: 'vi',
    list: [
      {
        description: 'Tiếng Việt',
        language: 'vi',
      }, {
        description: 'English',
        language: 'en',
      },
    ],
  },

  product: {
    status: {
      default: 'all',
      list: [{
        _id: 'all',
        name: 'Tất cả',
      }, {
        _id: 'true',
        name: 'Active',
      }, {
        _id: 'false',
        name: 'Inactive',
      }],
    },
  },

  order: {
    status: {
      list: [{
        _id: 'pending',
        name: 'Đang chờ',
      }, {
        _id: 'shipping',
        name: 'Đang vận chuyển',
      }, {
        _id: 'done',
        name: 'Hoàn thành',
      }, {
        _id: 'canceled',
        name: 'Đã hủy',
      }],
    },
  },


  // Account kit
  accountKit: {
    SDK: 'https://sdk.accountkit.com/vi_VN/sdk.js',
    appId: '270845610370126',
    version: 'v1.1',
    csrf: 'Account Kit',
    language: 'vi_VN',
    loginType: 'PHONE',
    fbAppEventsEnabled: true,
    debug: true,
  },
}
