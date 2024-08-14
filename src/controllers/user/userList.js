import { getAll } from '../../models/userModel.js'

const userList = (req, res) => {

    const users = getAll()
    res.json(users)
}

export default userList