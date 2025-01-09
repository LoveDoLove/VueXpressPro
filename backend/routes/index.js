const express = require('express')
const router = express.Router()
const sample = require('./sample')

router.use('/sample', sample)

module.exports = router
