import request from '../utils/request'

export default {
  test() {
    return request({
      url: '/sample/test',
      method: 'get'
    })
  }
}
