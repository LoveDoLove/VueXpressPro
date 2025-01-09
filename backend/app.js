// Main Libraries
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const pinoHttp = require('pino-http')
const logger = require('./utils/loggerHelper')

const env = process.env.NODE_ENV || 'development'
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) })

logger.info('Environment: ' + env)

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use(
  pinoHttp({
    logger: logger,
    customAttributeKeys: {
      req: 'request'
    }
  })
)

app.all('*', async (req, res, next) => {
  logger.info(req.method + ' ' + req.path)
  next()
  logger.info(req.method + ' ' + req.path)
})

app.use('/', require('./routes'))

app.use((err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app
