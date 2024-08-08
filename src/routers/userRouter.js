import express from 'express'
import userList from '../controllers/user/userList.js'
import userById from '../controllers/user/userById.js'
import createUser from '../controllers/user/createUser.js'
import editUser from '../controllers/user/editUser.js'
import editNameUser from '../controllers/user/editNameUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', userById)
router.get('/list', userList)
router.post('/', createUser)
router.put('/', editUser)
router.patch('/', editNameUser)
router.delete('/', deleteUser)

export default router