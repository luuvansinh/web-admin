import lodash from 'lodash'

const arrayToTree = (array, id = 'id', chil = 'children', children = 'children') => {
  const data = lodash.cloneDeep(array)
  const result = []
  const hash = {}
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item) => {
    const hashVP = hash[item[chil]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

export default {
  arrayToTree,
}
