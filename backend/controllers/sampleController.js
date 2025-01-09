const logger = require('../utils/loggerHelper')

const test = async (req, res) => {
  try {
    res.status(200).json({
      code: 200,
      message: 'Successfully'
    })
  } catch (error) {
    logger.error(`An error occurred: ${error.message}`)
    return res.status(500).json({
      code: 500,
      message: error.message
    })
  }
}

module.exports = { test }
