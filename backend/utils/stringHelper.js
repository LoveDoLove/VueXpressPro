class StringHelper {
  anyNullOrBlank(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '' || str[i] === ' ') {
        return true
      }
    }
    return false
  }

  generateRandomString(length) {
    let randomeString =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += randomeString.charAt(
        Math.floor(Math.random() * randomeString.length)
      )
    }
    return result
  }
}

module.exports = new StringHelper()
