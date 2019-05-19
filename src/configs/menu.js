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
}, {
  id: 'orders',
  name: 'Đơn hàng',
  icon: 'shopping-cart',
  route: '/promotions',
}, {
  id: 'promotions',
  name: 'Khuyến mãi',
  icon: 'gift',
  route: '/promotions',
}, {
  id: 'order-chart',
  name: 'Thống kê',
  icon: 'area-chart',
  route: '/order-chart',
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
