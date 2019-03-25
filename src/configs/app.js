import { key } from './locale'

const LocalStoragePrefix = (process.env.NODE_ENV === 'production') ? 'admin-' : 'admin-dev-'

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

  // City
  cities: {
    default: 'all',
    title: key.cities,
    list: [{
      _id: 'all',
      name: key.all,
    }, {
      _id: 'lao-cai',
      name: 'Lào Cai',
    }, {
      _id: 'dien-bien',
      name: 'Điện Biên',
    }, {
      _id: 'lai-chau',
      name: 'Lai Châu',
    }, {
      _id: 'son-la',
      name: 'Sơn La',
    }, {
      _id: 'yen-bai',
      name: 'Yên Bái',
    }, {
      _id: 'hoa-binh',
      name: 'Hoà Bình',
    }, {
      _id: 'thai-nguyen',
      name: 'Thái Nguyên',
    }, {
      _id: 'lang-son',
      name: 'Lạng Sơn',
    }, {
      _id: 'quang-ninh',
      name: 'Quảng Ninh',
    }, {
      _id: 'bac-giang',
      name: 'Bắc Giang',
    }, {
      _id: 'phu-tho',
      name: 'Phú Thọ',
    }, {
      _id: 'vinh-phuc',
      name: 'Vĩnh Phúc',
    }, {
      _id: 'bac-ninh',
      name: 'Bắc Ninh',
    }, {
      _id: 'hai-duong',
      name: 'Hải Dương',
    }, {
      _id: 'hai-phong',
      name: 'Hải Phòng',
    }, {
      _id: 'hung-yen',
      name: 'Hưng Yên',
    }, {
      _id: 'thai-binh',
      name: 'Thái Bình',
    }, {
      _id: 'ha-nam',
      name: 'Hà Nam',
    }, {
      _id: 'nam-dinh',
      name: 'Nam Định',
    }, {
      _id: 'ninh-binh',
      name: 'Ninh Bình',
    }, {
      _id: 'thanh-hoa',
      name: 'Thanh Hóa',
    }, {
      _id: 'nghe-an',
      name: 'Nghệ An',
    }, {
      _id: 'ha-tinh',
      name: 'Hà Tĩnh',
    }, {
      _id: 'quang-binh',
      name: 'Quảng Bình',
    }, {
      _id: 'quang-tri',
      name: 'Quảng Trị',
    }, {
      _id: 'thua-thien-hue',
      name: 'Thừa Thiên Huế',
    }, {
      _id: 'da-nang',
      name: 'Đà Nẵng',
    }, {
      _id: 'quang-nam',
      name: 'Quảng Nam',
    }, {
      _id: 'quang-ngai',
      name: 'Quảng Ngãi',
    }, {
      _id: 'binh-dinh',
      name: 'Bình Định',
    }, {
      _id: 'phu-yen',
      name: 'Phú Yên',
    }, {
      _id: 'khanh-hoa',
      name: 'Khánh Hòa',
    }, {
      _id: 'ninh-thuan',
      name: 'Ninh Thuận',
    }, {
      _id: 'binh-thuan',
      name: 'Bình Thuận',
    }, {
      _id: 'kon-tum',
      name: 'Kon Tum',
    }, {
      _id: 'gia-lai',
      name: 'Gia Lai',
    }, {
      _id: 'dak-lak',
      name: 'Đắk Lắk',
    }, {
      _id: 'dak-nong',
      name: 'Đắk Nông',
    }, {
      _id: 'lam-dong',
      name: 'Lâm Đồng',
    }, {
      _id: 'binh-phuoc',
      name: 'Bình Phước',
    }, {
      _id: 'tay-ninh',
      name: 'Tây Ninh',
    }, {
      _id: 'binh-duong',
      name: 'Bình Dương',
    }, {
      _id: 'dong-nai',
      name: 'Đồng Nai',
    }, {
      _id: 'ba-ria-vung-tau',
      name: 'Bà Rịa - Vũng Tàu',
    }, {
      _id: 'ho-chi-minh',
      name: 'Hồ Chí Minh',
    }, {
      _id: 'long-an',
      name: 'Long An',
    }, {
      _id: 'tien-giang',
      name: 'Tiền Giang',
    }, {
      _id: 'ben-tre',
      name: 'Bến Tre',
    }, {
      _id: 'tra-vinh',
      name: 'Trà Vinh',
    }, {
      _id: 'vinh-long',
      name: 'Vĩnh Long',
    }, {
      _id: 'dong-thap',
      name: 'Đồng Tháp',
    }, {
      _id: 'an-giang',
      name: 'An Giang',
    }, {
      _id: 'kien-giang',
      name: 'Kiên Giang',
    }, {
      _id: 'can-tho',
      name: 'Cần Thơ',
    }, {
      _id: 'hau-giang',
      name: 'Hậu Giang',
    }, {
      _id: 'soc-trang',
      name: 'Sóc Trăng',
    }, {
      _id: 'bac-lieu',
      name: 'Bạc Liêu',
    }, {
      _id: 'ca-mau',
      name: 'Cà Mau',
    }, {
      _id: 'tuyen-quang',
      name: 'Tuyên Quang',
    }, {
      _id: 'ha-noi',
      name: 'Hà Nội',
    }, {
      _id: 'ha-giang',
      name: 'Hà Giang',
    }, {
      _id: 'cao-bang',
      name: 'Cao Bằng',
    }, {
      _id: 'bac-kan',
      name: 'Bắc Kạn',
    }],
  },
}
