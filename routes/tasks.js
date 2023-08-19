const express = require('express')
const router = express.Router()

const tasks = require('../controller/tasks');

router.route('/').get(tasks.alltasks)
router.route('/').post(tasks.createtask)
router.route('/:id').get(tasks.taskinfo)
router.route('/:id').patch(tasks.updatetask)
router.route('/:id').delete(tasks.deletetask)
// router.put('/:id',tasks.edittask);
module.exports = router;
