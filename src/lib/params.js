import request from 'superagent'
let params

const getParams = function () {
  if (!params) {
    return request.get(process.env.PARAM_HOST || 'http://10.10.10.102:4444')
      .then(function (response) {
        console.log(response)
        params = response.body
        return params
      })
      .catch(function (error) {
        console.log('Params error', error)
      })
  } else {
    return Promise.resolve(params)
  }
}

export default getParams
