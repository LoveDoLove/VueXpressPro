const express = require('express')
const router = express.Router()
const sample = require('./sampleRoutes')

router.use('/sample', sample)

module.exports = router
