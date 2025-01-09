class HTTPHelper {
  getIpAddress(req) {
    return (
      req.headers['cf-connecting-ip'] ||
      req.headers['x-real-ip'] ||
      req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      ''
    )
  }
}

module.exports = HTTPHelper
