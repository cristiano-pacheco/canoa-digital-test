const error = JSON.parse('{"message":"The given data was invalid.","errors":{"vehicle":["The vehicle field is required."],"brand":["The brand field is required."],"year":["The year must be an integer."],"description":["The description field is required."]}}')

const keys = Object.keys(error.errors)

const err = keys.map(key => {
  return error.errors[key][0]
})

console.log(err)
