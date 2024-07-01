const pino = require('pino')

const customSerializer = {
  req: req => {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      remoteAddress: req.connection.remoteAddress,
      remotePort: req.connection.remotePort
    }
  }
}

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      ignore: 'pid,hostname'
    }
  },
  serializers: {
    req: customSerializer.req
  }
})

module.exports = logger
