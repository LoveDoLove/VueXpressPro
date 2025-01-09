const mysql = require('mysql')
const logger = require('../utils/loggerHelper')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect(function (err) {
  if (err) throw err
  logger.info('Connected!')
})

const execute = async (query, values) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, function (err, result) {
      if (err) reject(err)
      resolve(result)
    })
  })
}

module.exports = execute
