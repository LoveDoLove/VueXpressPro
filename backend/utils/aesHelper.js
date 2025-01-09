const crypto = require('crypto')

class AESHelper {
  constructor(key) {
    this.key = Buffer.from(key, 'hex')
  }

  aes256EcbEncrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-ecb', this.key, null)
    let encrypted = cipher.update(text, 'utf8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
  }

  aes256EcbDecrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-ecb', this.key, null)
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  }
}

module.exports = AESHelper
