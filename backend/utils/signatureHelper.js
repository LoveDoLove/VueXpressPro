const AESHelper = require('./aesHelper')

class SignatureHelper {
  constructor(key) {
    this.aesHelper = new AESHelper(key)
  }

  aesSignContent(timestamp, content) {
    const combineContent = `${timestamp}${content}`
    const signature = this.aesHelper.aes256EcbEncrypt(combineContent)
    return signature
  }

  verifySignatureContent(req) {
    const timestamp = req.headers['timestamp']
    const signature = req.headers['signature']
    const content = JSON.stringify(req.body)
    const signContent = this.aesSignContent(timestamp, content)
    return signature === signContent
  }
}

module.exports = SignatureHelper
