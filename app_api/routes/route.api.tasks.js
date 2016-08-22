var express = require('express');
var router = express.Router();
var ctrlTasks = require('../controllers/controller.api.tasks');
var ctrlAuth = require('../controllers/controller.authentication');

var jwt = require('express-jwt');
var auth = jwt({
	secret : process.env.JWT_SECRET,
	userProperty : 'payload'
});

router.get('/tasks', auth, ctrlTasks.tasksList);
router.get('/tasks/:taskId', auth, ctrlTasks.taskFindOne);
router.post('/tasks/new', auth, ctrlTasks.taskCreate);
router.put('/tasks/:taskId', auth, ctrlTasks.taskUpdateOne);
router.delete('/tasks/:taskId', auth, ctrlTasks.taskDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;