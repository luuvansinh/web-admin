
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

  // COMMON
  common: {
    login: () => ({
      url: '/login-web-with-phone-number',
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
  },

  // USER
  user: {
    all: () => {
      return {
        url: '/users',
        method: METHODS.get,
      }
    },
  },

  me: {
    userInfo: () => ({
      url: '/me',
      method: METHODS.get,
    }),
  },
}
