import { remove } from "../../models/userModel.js"

const deleteUser = async (req, res) => {
    const {id}  = req.params
    const user =  await remove(+id)

    if(!user)
        return res.status(404).json({
            error: "Usuário não encontrado"
        })

    return res.json({
        message: "Usuário removido com sucesso!", 
        user
    })
}
export default deleteUser