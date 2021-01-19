
const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.post('/novatarefa', TaskController.novatarefa)

module.exports = router