export function getErrorMessages (data) {
  const keys = Object.keys(data)
  return keys.map(key => data[key][0])
}
