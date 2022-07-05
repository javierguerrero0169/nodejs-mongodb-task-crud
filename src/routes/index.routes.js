import { Router } from 'express'
import { renderTasks, createTasks, renderTaskEdit } from '../controllers/tasks.controller'
import { editTask, deleteTask, tasktoggleDone } from '../controllers/tasks.controller'

const router = Router()

router.get('/', renderTasks)

router.post('/task/add', createTasks)

router.get('/task/:id/edit', renderTaskEdit)

router.post('/task/:id/edit', editTask)

router.get('/task/:id/delete', deleteTask)

router.get('/task/:id/toggleDone', tasktoggleDone)
export default router