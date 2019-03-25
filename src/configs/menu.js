const Menus = [{
  id: 'products',
  name: 'Sản phẩm',
  icon: 'shop',
  route: '/products',
}, {
  id: 'categories',
  name: 'Danh mục',
  icon: 'bars',
  route: '/categories',
}, {
  id: 'users',
  name: 'Người dùng',
  icon: 'user',
  route: '/users',
}]

/**
 * Pick list menu ids from array of numbers
 *
 * @param {Array} array
 */
export const pickId = (array = []) => {
  if (!array.length) {
    return Menus
  }

  const ids = array.map((order) => {
    return Menus[order]
  }).filter(id => id)
  return ids
}

export default {
  // All pages
  admin: {
    id: 'admin',
    pages: pickId(),
  },

  editor: {
    id: 'editor',
    pages: pickId(),
  },
}
