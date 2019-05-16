// Add more routes to the end of this array, do not modify this array order
const LIST_ROUTES = [
  // 0
  {
    id: 'products',
    value: new RegExp('/products$', 'i'),
  },
  {
    id: 'products',
    value: new RegExp('/products/.+$', 'i'),
  },
  {
    id: 'users',
    value: new RegExp('/users$', 'i'),
  },
  {
    id: 'categories',
    value: new RegExp('/categories$', 'i'),
  },
  {
    id: 'categories',
    value: new RegExp('/categories/.+$', 'i'),
  },
  {
    id: 'promotions',
    value: new RegExp('/promotions$', 'i'),
  },
  {
    id: 'promotions',
    value: new RegExp('/promotions/.+$', 'i'),
  },
  {
    id: 'orders',
    value: new RegExp('/orders/.+$', 'i'),
  },
  {
    id: 'orders',
    value: new RegExp('/orders$', 'i'),
  },
]

/**
 * Pick list menu ids from array of numbers
 *
 * @param {Array} array
 */
export const pickId = (array = []) => {
  if (!array.length) {
    return LIST_ROUTES
  }

  const ids = array.map((order) => {
    return LIST_ROUTES[order]
  }).filter(id => id)
  return ids
}

export default {
  // All pages
  admin: {
    id: 'admin',
    name: 'Admin',
    pages: pickId(),
  },

  editor: {
    id: 'editor',
    name: 'Editor',
    pages: pickId(),
  },

}
