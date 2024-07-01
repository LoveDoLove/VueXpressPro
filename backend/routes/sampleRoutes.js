const express = require('express')
const router = express.Router()
const sample = require('../controllers/sampleControllers')

// Define routes for user resource
router.get('/test', sample.test)

module.exports = router
