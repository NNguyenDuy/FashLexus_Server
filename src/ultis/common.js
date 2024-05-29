export const formatPath = (value) => {
  return value.replace(/\s/g, '').replace('&', '-')
}

export const getPrice = (value) => {
  const regex = /-?\d+(\.\d+)?%?/
  const matches = value.match(regex)
  if (matches && matches.length > 0) {
    return matches[0]
  }
  return null
}
