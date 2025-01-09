const app = require('./app')
const logger = require('./utils/loggerHelper')
const port = process.env.PORT || 3000

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})
