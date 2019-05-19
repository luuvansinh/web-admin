
const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

export default {
  endpoint: 'http://localhost:7070',

  methods: METHODS,

  public: {
    products: {
      all: () => ({
        url: '/products',
        method: METHODS.get,
      }),
    },
  },

  // COMMON
  common: {
    login: () => ({
      url: '/login-web-with-phone-number',
      method: METHODS.post,
    }),
    publicLogin: () => ({
      url: '/login',
      method: METHODS.post,
    }),
    register: () => ({
      url: '/register',
      method: METHODS.post,
    }),
  },

  product: {
    all: () => ({
      url: '/admin/products',
      method: METHODS.get,
    }),
    detail: _id => ({
      url: `/admin/products/${_id}`,
      method: METHODS.get,
    }),
    update: _id => ({
      url: `/admin/products/${_id}`,
      method: METHODS.put,
    }),
    create: () => ({
      url: '/admin/products',
      method: METHODS.post,
    }),
    changeStatus: _id => ({
      url: `/admin/products/${_id}/change-status`,
      method: METHODS.patch,
    }),
    covers: _id => ({
      url: `/admin/products/${_id}/covers`,
      method: METHODS.patch,
    }),
  },

  categoy: {
    all: () => ({
      url: '/admin/categories',
      method: METHODS.get,
    }),
    create: () => ({
      url: '/admin/categories',
      method: METHODS.post,
    }),
    update: _id => ({
      url: `/admin/categories/${_id}`,
      method: METHODS.put,
    }),
    changeStatus: _id => ({
      url: `/admin/categories/${_id}/change-status`,
      method: METHODS.patch,
    }),
    getForPublic: () => ({
      url: '/categories',
      method: METHODS.get,
    }),
  },

  cart: {
    all: () => ({
      url: '/cart',
      method: METHODS.get,
    }),
  },

  // USER
  user: {
    all: () => {
      return {
        url: '/admin/users',
        method: METHODS.get,
      }
    },
    changeStatus: _id => ({
      url: `/admin/users/${_id}/change-status`,
      method: METHODS.patch,
    }),
  },

  me: {
    userInfo: () => ({
      url: '/me',
      method: METHODS.get,
    }),
  },

  // promotion
  promotion: {
    all: () => ({
      url: '/promotions',
      method: METHODS.get,
    }),
  },

  order: {
    all: () => ({
      url: '/admin/orders',
      method: METHODS.get,
    }),
    changeStatus: _id => ({
      url: `/admin/orders/${_id}/change-status`,
      method: METHODS.patch,
    }),
    chart: () => ({
      url: '/admin/orders/chart',
      method: METHODS.get,
    }),
  },
}
